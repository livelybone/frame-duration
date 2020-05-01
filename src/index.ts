export default class FrameDuration {
  times = 1

  duration!: number

  constructor(defaultDuration?: number) {
    // @ts-ignore
    this.duration = +defaultDuration || 1000 / 30

    let i = 0
    let last: number
    const that = this
    ;(function init() {
      requestAnimationFrame(now => {
        const $now = now || new Date().getTime()
        if (last) {
          that.update($now - last)
        }
        last = $now

        if (++i < 60) init()
      })
    })()
  }

  update(currDuration: number) {
    // frameDuration usually not less than 1000 / 30
    const $currDuration = Math.min(1000 / 30, currDuration)

    this.times += 1
    this.duration = (this.duration + $currDuration) / 2
  }
}
