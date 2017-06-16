/**
 * Created by chotoxautinh on 6/17/17.
 */
var ffi = require('ffi')

var libfactorial = ffi.Library('./libfactorial', {
    'factorial': ['uint64', ['int']]
});

var libhello = ffi.Library('./hello', {
    'hello': ['void', []]
})

module.exports = {
    factorial: libfactorial.factorial,
    helloSync: libhello.hello,
    hello: libhello.hello.async
}