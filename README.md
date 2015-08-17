# timpl [![Circle CI](https://circleci.com/gh/clearhead/timpl.svg?style=svg)](https://circleci.com/gh/clearhead/timpl)

`fn(/*text*/) || string` with optional data templating 

install: `npm install timpl` || `bower install timpl`

#### Usage

```js
timpl('one: {{one}}', {one: 1}); // ==> one: 1

timpl('two: {{0}}', [2]); // ==> two: 2

timpl(function () {/*
  foo: bar
*/}); // ==> foo: bar

timpl(function () {/*
  foo: {{bar}}
*/}, {bar: 'baz'}); // ==> foo: baz
```

## Inspired by / compilation of
 
* https://github.com/sindresorhus/multiline
* https://github.com/premasagar/tim

##### Why? Because this...

```js
$('#content').replaceWith(timpl(function () {/*
  <section id="content">
    <h1>{{title}}</h1>
    <img src="{{src}}">
  </section>
*/}, {title: 'demo', src: '//placehold.it/200x200'}));
```
##### ...is cleaner/easier to edit than this:

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
