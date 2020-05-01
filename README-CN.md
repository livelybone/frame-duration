# frame-duration
[![NPM Version](http://img.shields.io/npm/v/frame-duration.svg?style=flat-square)](https://www.npmjs.com/package/frame-duration)
[![Download Month](http://img.shields.io/npm/dm/frame-duration.svg?style=flat-square)](https://www.npmjs.com/package/frame-duration)
![gzip with dependencies: 0.5kb](https://img.shields.io/badge/gzip--with--dependencies-0.5kb-brightgreen.svg "gzip with dependencies: 0.5kb")
![typescript](https://img.shields.io/badge/typescript-supported-blue.svg "typescript")

[English Document](./README.md)

A lib for calculating the duration of frame dynamically, based on requestAnimationFrame, default is 1000 / 30. The actual duration will be calculated after 15 frames.

## repository
https://github.com/livelybone/frame-duration.git

## Demo
https://github.com/livelybone/frame-duration#readme

## Run Example
你可以通过运行项目的 example 来了解这个组件的使用，以下是启动步骤：

1. 克隆项目到本地 `git clone https://github.com/livelybone/frame-duration.git`
2. 进入本地克隆目录 `cd your-module-directory`
3. 安装项目依赖 `npm i`(使用 taobao 源: `npm i --registry=http://registry.npm.taobao.org`)
4. 启动服务 `npm run dev`
5. 在你的浏览器看 example (地址通常是 `http://127.0.0.1:3000/examples/test.html`)

## Installation
```bash
npm i -S frame-duration
```

## Global name - The variable the module exported in `umd` bundle
`FrameDuration`

## Interface
去 [index.d.ts](./index.d.ts) 查看可用方法和参数

## Usage
```js
import FrameDuration from 'frame-duration'

console.log(FrameDuration.duration) // -> 33.33

// 设置默认帧间隔。只在应用最初的时候设置默认
FrameDuration.duration = 1000 / 60

// 打印动态计算之后的帧间隔
setTimeout(() => {
  console.log(FrameDuration.duration) // -> 16.66
}, 1000)
```

在 HTML 文件中直接引用，你可以在 [CDN: unpkg](https://unpkg.com/frame-duration/lib/umd/) 看到你能用到的所有 js 脚本
```html
<-- 然后使用你需要的 -->
<script src="https://unpkg.com/frame-duration/lib/umd/<--module-->.js"></script>
```

或者，你也可以使用 [CDN: jsdelivr](https://cdn.jsdelivr.net/npm/frame-duration/lib/umd/) 看到你能用到的所有 js 脚本
```html
<script src="https://cdn.jsdelivr.net/npm/frame-duration/lib/umd/<--module-->.js"></script>
```
