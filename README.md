# timpl [![Circle CI](https://circleci.com/gh/clearhead/timpl.svg?style=svg)](https://circleci.com/gh/clearhead/timpl)

`fn(/*text*/) || string` with optional data templating 

#### Usage

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

##### Why? Because this:

```js
$('#content').replaceWith(window.timpl(function () {/*
  <section id="content">
    <h1>{{title}}</h1>
    <img src="{{src}}">
  </section>
*/}, {title: 'demo', src: '//placehold.it/200x200'}));
```
##### is a touch cleaner than this:

```js
var title = 'demo';
var src = '//placehold.it/200x200';
$('#content').replaceWith([
  '<section id="content">',
  '  <h1>', title, '</h1>',
  '  <img src="', src, '">',
  '</section>',
].join(''));
```

## NPM helpers

* `npm test`
* `npm build`


## Inspired by 
 
* https://github.com/sindresorhus/multiline
* https://github.com/premasagar/tim
