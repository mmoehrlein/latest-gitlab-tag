Latest GitLab Tag
===

> Fetch the latest tag name from a GitLab repo (promise-based)

**This is a fork of [mhkeller/latest-github-tag](https://github.com/mhkeller/latest-github-tag) modified to work with gitlab instead of github.\
There are also some differences in the behaviour and options so please check below**

## Usage
### Simple
```js
const latestGitlabTag = require('latest-gitlab-tag');
const packageName = '<search-string>';

latestGitlabTag(packageName)
    .then((tag) =>{
            console.log(tag);
        }
    )
    .catch((err) =>{
        console.error(err);
    });
```

Resolves to `undefined` if a package has no tags.

### Advanced
```js
const latest = require('latest-gitlab-tag');
const packageName = '<search string>';
const options = {
    url: 'https://gitlab.example.com',
    token: '<access-token>'
};

latest(packageName, options)
    .then((tag) =>{
            console.log(tag);
        }
    )
    .catch((err) =>{
        console.error(err);
    });
```
## Options

Type: `Object`
Description: The options object will be passed to the [gitlab](https://www.npmjs.com/package/gitlab) package. Consult its documentation for [XMLHttpRequest](https://www.npmjs.com/package/gitlab#using-xmlhttprequest) and [sudo](https://www.npmjs.com/package/gitlab#sudo).

### url

Type: `string`
Description: Defaults to 'http://gitlab.com'

### token | oauthToken

Type: `string`
Description: provide an access-token or OAuth-Token.


## License

MIT