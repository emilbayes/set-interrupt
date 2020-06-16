function setInterrupt (cb, timeout) {
  var t = setTimeout(cb, timeout)

  t.interrupt = function interrupt (err, val) {
    if (t._destroyed) return
    clearTimeout(t)
    if (err !== undefined || val !== undefined) cb(err, val)
  }

  return t
}

function clearInterrupt (interrupt, err, val) {
  if (interrupt.interrupt) return interrupt.interrupt(err, val)
}

module.exports = {
  setInterrupt,
  clearInterrupt
}
