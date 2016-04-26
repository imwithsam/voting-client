// Set up document and windows objects for React jsdom testing
import jsdom from 'jsdom'
import chai from 'chai'
import chaiImmutable from 'chai-immutable'

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
const win = doc.defaultView

global.document = doc
global.window = win

// Hoist jsdom window properties onto Node global object so React can call
// properties without explicitly calling them on the window object
Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key]
  }
})

chai.use(chaiImmutable)
