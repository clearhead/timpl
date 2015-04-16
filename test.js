/*jshint node:true, mocha:true, latedef:false*/
var assert = require('assert');

run(require('./timpl').timpl);
run(require('./timpl.min').timpl);

function run(timpl) {

  it('should support simple strings + data', function() {
    var actual = timpl('one: {{one}}', {
      one: 1
    }); // ==> one: 1
    assert.equal(actual, 'one: 1');
  });

  it('should support simple strings + arrays', function() {
    var actual = timpl('two: {{0}}', [2]); // ==> two: 2
    assert.equal(actual, 'two: 2');
  });

  it('should support multiline strings + data', function() {
    var actual = timpl(function() {
      /*
        foo: {{bar}}
      */
    }, {
      bar: 'foo'
    }); // ==> foo: foo
    assert.equal(actual, 'foo: foo');
  });


  it('should support multiline comments', function() {
    var actual = timpl(function() {
      /*
<!doctype html>
<html>
  <body>
    <h1>Hello world!</h1>
  </body>
</html>
        */
    });
    var expected = '<!doctype html>\n<html>\n  <body>\n    <h1>Hello world!</h1>\n  </body>\n</html>';
    assert.equal(actual, expected);
  });

  it('should match when comment starts with `/*!`', function() {
    var actual = timpl(function() {
      /*!
      foo
        */
    });
    var expected = 'foo';
    assert.equal(actual, expected);
  });

  it('should match when comment starts with `/*@preserve`', function() {
    var actual = timpl(function() {
      /*@preserve
      foo
        */
    });
    var expected = 'foo';
    assert.equal(actual, expected);
  });

  it('should match when comment starts with `/*!@preserve`', function() {
    var actual = timpl(function() {
      /*!@preserve
      foo
        */
    });
    var expected = 'foo';
    assert.equal(actual, expected);
  });

  it('should wipe leading and trailing empty lines', function() {
    var actual = timpl(function() {
      /*
      foo
        */
    });
    var expected = 'foo';
    assert.equal(actual, expected);
  });

  it('should throw if it can\'t match comment contents', function() {
    assert.throws(function() {
      timpl(function() {});
    });

    assert.throws(function() {
      timpl(function() { /**/ });
    });
  });
}
