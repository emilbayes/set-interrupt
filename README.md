# `set-interrupt`

[![Build Status](https://travis-ci.org/emilbayes/set-interrupt.svg?branch=master)](https://travis-ci.org/emilbayes/set-interrupt)

> Interruptible timer

## Usage

```js
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

```

## API

### `const itr = setInterrupt(cb, time)`

Creates a new interrupt

### `itr.interrupt([err], [val])`

Cancels the interrupt timer. If you pass `err` or `val`, the callback is invoked
like a standard Node.js callback. Otherwise the callback is simply ignored.
If the timer has already been invoked, this becomes a noop

### `clearInterrupt(itr, [err], [val])`

Convenience for the above, but behaves like `clearTimeout`, ignoring `itr` that
is not an interrupt

## Install

```sh
npm install set-interrupt
```

## License

[ISC](LICENSE)
