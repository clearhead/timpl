# timpl [![Circle CI](https://circleci.com/gh/clearhead/timpl.svg?style=svg)](https://circleci.com/gh/clearhead/timpl)

`multiline(/*text*/) || strings` with optional data templating 

##### Usage

```js
window.timpl('one: {{one}}', {one: 1}); // ==> one: 1

window.timpl('two: {{0}}', [2]); // ==> two: 2

window.timpl(function () {/*
  foo: bar
*/}); // ==> foo: bar

window.timpl(function () {/*
  foo: {{bar}}
*/}, {bar: 'baz'}); // ==> foo: baz
```

## NPM helpers

* `npm test`
* `npm build`


## Inspired by 
 
* https://github.com/sindresorhus/multiline
* https://github.com/premasagar/tim
