# Execute browser-like Javascript without a Browser

PhantomJS is a toolkit to execute Javascript headless. 
It therefore allows for headless website testing, DOM access- and manipulation, page evaluation
and a few more things. More details and documentation on their [website](http://phantomjs.org/).

I created a sample project with a few examples to get you started quickly and trying things out.

## This project contains 
* A Hello World with PhantomJS
* Taking a screenshot of a rendered HTML page
* A small program accessing and manipulating the DOM
* A [Mocha](https://mochajs.org/) script showing how to to headless website testing using [mocha-phantomjs-core](https://github.com/nathanboktae/mocha-phantomjs-core)

## Installing
* Download and install [PhantomJS](http://phantomjs.org/download.html)
* Clone this project
* Change to the root directory of the project
* Run `npm install`

## Execute examples

```
phantomjs hello-phantom.js
phantomjs screenshot.js
phantomjs dom-access.js
# To execute mocha tests for a website use mocha-phantomjs-core like this
phantomjs ./node_modules/mocha-phantomjs-core/mocha-phantomjs-core.js test.html 
```
