Latest GitLab Tag
===

> Fetch the latest tag name from a GitLab repo (promise-based)

**This is a fork of [mhkeller/latest-github-tag](https://github.com/mhkeller/latest-github-tag) modified to work with gitlab instead of github.**

```js
const latestTag = require('latest-gitlab-tag');
latestTag('mhkeller', 'stable-tag').then(function (tag) {
  console.log(tag) // Outputs v1.0.0
})
.catch(function (err) {
  console.error(err)
})
```

Resolves to an error if a package has no tags.

## Options

You can pass an options object as an optional third argument. It can take the two keys:

* `auth` — An authentication object that will be passed to the GitHub module's [`authenticate`](https://github.com/mikedeboer/node-github#authentication) method.
* `timeout` — A value, in milliseconds, to wait for this call to be made. Defaults to `5000`.

```js
latestTag('mhkeller', 'secret-repo', {
  timeout: 0,
  auth: {
    type: 'oauth', // See https://github.com/mikedeboer/node-github#authentication for other types
    token: 'your-access-token'
  }
}).then(function (tag) {
  console.log(tag) // Outputs the latest tag
})
.catch(function (err) {
  console.error(err)
})
```

## License

MIT