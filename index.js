const {Projects, Tags} = require('gitlab');
const semver = require('semver');

/**
 * gets the latest tag for a gitlab project
 *
 * @param packageName
 * @param {{repoUrl:string, repoAuth:string, repoOAuth:string}}options
 * @returns {Promise.<*>}
 */
async function latest(packageName, options){

    options = options || {};

    const projectsService = new Projects(options);
    const TagsService = new Tags(options);

    /**
     * search gitlab for packagename
     *
     * @type {Array.<{id:int, name:string, description:string, name_with_namespace:string}>} res
     */
    let res = await projectsService.search(packageName);
    if(res.length === 0){
        throw new Error('Could not find a project with that name.');
    } else if(res.length > 1){
        console.warn('More then one project was found.\nThe first result will be used:');
        console.log(JSON.stringify({
            id: res[0].id,
            name: res[0].name,
            name_with_namespace: res[0].name_with_namespace,
            description: res[0].description
        }, null, 2));
        console.log('Following results (max. 3):');
        console.log(JSON.stringify(res.slice(1, 4)
                                      .map((item) =>{
                                              return {
                                                  id: item.id,
                                                  name: item.name,
                                                  name_with_namespace: item.name_with_namespace,
                                                  description: item.description
                                              };
                                          }
                                      ), null, 2));
    }

    /**
     * @type {Array.<{name:string}>}
     */
    let tags = await TagsService.all(res[0].id.toString());
    let tagsSorted = tags.map(function(item){
                             return item.name;
                         })
                         .filter(semver.valid)
                         .sort(semver.rcompare);
    return tagsSorted[0];
}

module.exports = latest;