/**
 * Created by chotoxautinh on 6/17/17.
 */
var ffi_test = require('../index');

ffi_test.hello((err) => {
    if (err)
        throw err;
    console.log('Async call complete');
})

console.log(ffi_test.factorial(5));

// ffi_test.helloSync();

