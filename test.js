const test = require('tape')
var { setInterrupt, clearInterrupt } = require('.')

test('basic clearInterrupt', function (assert) {
  assert.plan(1)
  var i = setInterrupt(function (err, val) {
    assert.error(err)
    assert.ok(val == null)
  }, 10)

  setTimeout(function () {
    assert.ok(true)
    assert.end()
  }, 15)

  clearInterrupt(i)
})

test('basic .interrupt', function (assert) {
  assert.plan(1)
  var i = setInterrupt(function (err, val) {
    assert.error(err)
    assert.ok(val == null)
  }, 10)

  setTimeout(function () {
    assert.ok(true)
    assert.end()
  }, 15)

  i.interrupt()
})

test('basic clearInterrupt with error', function (assert) {
  assert.plan(2)
  var i = setInterrupt(function (err, val) {
    assert.ok(err)
    assert.ok(val == null)
    assert.end()
  }, 10)

  clearInterrupt(i, true)
})

test('basic .interrupt with error', function (assert) {
  assert.plan(2)
  var i = setInterrupt(function (err, val) {
    assert.ok(err)
    assert.ok(val == null)
    assert.end()
  }, 10)

  i.interrupt(true)
})

test('basic clearInterrupt with error', function (assert) {
  assert.plan(2)
  var i = setInterrupt(function (err, val) {
    assert.error(err)
    assert.ok(val)
    assert.end()
  }, 10)

  clearInterrupt(i, null, true)
})

test('basic .interrupt with error', function (assert) {
  assert.plan(2)
  var i = setInterrupt(function (err, val) {
    assert.error(err)
    assert.ok(val)
    assert.end()
  }, 10)

  i.interrupt(null, true)
})

test('clearInterrupt twice', function (assert) {
  assert.plan(2)
  var i = setInterrupt(function (err, val) {
    assert.error(err)
    assert.ok(val)
    assert.end()
  }, 10)

  clearInterrupt(i, null, true)
  clearInterrupt(i, null, true)
})

test('.interrupt twice', function (assert) {
  assert.plan(2)
  var i = setInterrupt(function (err, val) {
    assert.error(err)
    assert.ok(val)
    assert.end()
  }, 10)

  i.interrupt(null, true)
  i.interrupt(null, true)
})

test('clearInterrupt null', function (assert) {
  clearInterrupt(null)
  assert.end()
})
