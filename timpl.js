/** 
 * window.timpl 
 * usage: http://git.io/vvazo
 */
;(function(window) {
  "use strict";

  window.timpl = function(input, data) {
    return tim(
      input.call ? multiline(input) : input,
      data || {}
    ).replace(/^\s+|\s+$/g,''); // trim
  };

  var reCommentContents = /\/\*!?(?:\@preserve)?[ \t]*(?:\r\n|\n)([\s\S]*?)(?:\r\n|\n)[ \t]*\*\//;
  var start = "{{",
    end = "}}",
    path = "[a-z0-9_$][\\.a-z0-9_]*", // e.g. config.person.name
    pattern = new RegExp(start + "\\s*(" + path + ")\\s*" + end, "gi"),
    undef;

  function multiline(fn) {
    var match = reCommentContents.exec(fn.toString());
    if (!match) {
      throw new TypeError('Multiline comment missing.');
    }
    return match[1];
  }

  function tim(template, data) {
    // Merge data into the template string
    return template.replace(pattern, function(tag, token) {
      var path = token.split("."),
        len = path.length,
        lookup = data,
        i = 0;

      for (; i < len; i++) {
        lookup = lookup[path[i]];

        // Property not found
        if (lookup === undef) {
          throw "tim: '" + path[i] + "' not found in " + tag;
        }

        // Return the required value
        if (i === len - 1) {
          return lookup;
        }
      }
    });
  }

})(typeof exports === 'undefined' ? exports : this);
