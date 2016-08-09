/**
 * Created by timur on 8/9/16.
 */

const log = require('./index')

function greaterThanTen(num) {
  if(num > 10) {
    log('green', 'Success')
  } else {
    log('red', 'Failure')
  }
}

greaterThanTen(25) // green output

greaterThanTen(7) // red output

log('magenta', 'There are more colors')
log('cyan', 'See them all at the link below')
log('blue', 'https://www.npmjs.com/package/chalk')
