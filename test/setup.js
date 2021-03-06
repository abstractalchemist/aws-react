const { JSDOM } = require('jsdom')

const jsdom = new JSDOM(
   '<html><body><div id="content" /></body></html>',
   {
      url:"http://example.com"
   })

global.window = jsdom.window
global.document = jsdom.window.document
global.navigator = {
   userAgent: 'node.js'
}

function copyProps(src, target) {
   const props = Object.getOwnPropertyNames(src)
      .filter(prop => typeof target[prop] === 'undefined')
      .reduce((result, prop) => ({
      ...result,
         [prop]: Object.getOwnPropertyDescriptor(src, prop),
      }), {});
   Object.defineProperties(target, props);
}

copyProps(window, global);

const Enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')
Enzyme.configure({ adapter: new Adapter() })
