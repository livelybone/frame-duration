# frame-duration
[![NPM Version](http://img.shields.io/npm/v/frame-duration.svg?style=flat-square)](https://www.npmjs.com/package/frame-duration)
[![Download Month](http://img.shields.io/npm/dm/frame-duration.svg?style=flat-square)](https://www.npmjs.com/package/frame-duration)
![gzip with dependencies: 0.5kb](https://img.shields.io/badge/gzip--with--dependencies-0.5kb-brightgreen.svg "gzip with dependencies: 0.5kb")
![typescript](https://img.shields.io/badge/typescript-supported-blue.svg "typescript")

[中文文档](./README-CN.md)

A lib for calculating the duration of frame dynamically, based on requestAnimationFrame, default is 1000 / 30. The actual duration will be calculated after 15 frames.

## repository
https://github.com/livelybone/frame-duration.git

## Demo
https://github.com/livelybone/frame-duration#readme

## Run Example
you can see the usage by run the example of the module, here is the step:

1. Clone the library `git clone https://github.com/livelybone/frame-duration.git`
2. Go to the directory `cd your-module-directory`
3. Install npm dependencies `npm i`(use taobao registry: `npm i --registry=http://registry.npm.taobao.org`)
4. Open service `npm run dev`
5. See the example(usually is `http://127.0.0.1:3000/examples/test.html`) in your browser

## Installation
```bash
npm i -S frame-duration
```

## Global name - The variable the module exported in `umd` bundle
`FrameDuration`

## Interface
See what method or params you can use in [index.d.ts](./index.d.ts)

## Usage
```js
import FrameDuration from 'frame-duration'

console.log(FrameDuration.duration) // -> 33.33

// Set default duration. Make sure that this only run at the start of app
FrameDuration.duration = 1000 / 60

// Duration after dynamic calculate
setTimeout(() => {
  console.log(FrameDuration.duration) // -> 16.66
}, 1000)
```

Use in html, see what you can use in [CDN: unpkg](https://unpkg.com/frame-duration/lib/umd/)
```html
<-- use what you want -->
<script src="https://unpkg.com/frame-duration/lib/umd/<--module-->.js"></script>
```

Or，see what you can use in [CDN: jsdelivr](https://cdn.jsdelivr.net/npm/frame-duration/lib/umd/)
```html
<script src="https://cdn.jsdelivr.net/npm/frame-duration/lib/umd/<--module-->.js"></script>
```
