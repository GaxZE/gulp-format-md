/*!
 * gulp-format-md <https://github.com/jonschlinkert/gulp-format-md>
 *
 * Copyright (c) [object Object], Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var utils = require('./utils');
var format = require('./');

module.exports = function(options) {
  return utils.through.obj(function(file, enc, next) {
    next(null, format(file, options));
  });
};
