/**
 * Created by timur on 8/9/16.
 */

const gutil = require('gulp-util')
const format = require('util').format

const _log = (color, text, args) => gutil.log(gutil.colors[color](!args ? text : format(text, args)))

module.exports = {
	log: (text, args) => _log('white', text, args),
	test: (text, args) => _log('magenta', text, args),
	warn: (text, args) => _log('yellow', text, args),
	error: (text, args) => _log('red', text, args),
};
