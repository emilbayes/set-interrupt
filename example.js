var { setInterrupt, clearInterrupt } = require('set-interrupt')

var i = setInterrupt(function (err, val) {
  console.log('Hello world')
}, 1000)

// Never calls the callback
clearInterrupt(i)
// or
i.interrupt()

// Calls the callback with an error
clearInterrupt(i, new Error('Failed'))
// or
i.interrupt(new Error('Failed'))

// Calls the callback with a value
clearInterrupt(i, null, 'ok')
// or
i.interrupt(null, 'ok')
