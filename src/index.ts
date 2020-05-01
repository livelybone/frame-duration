const root: any = typeof window === 'undefined' ? global || {} : window

const FrameDuration = {
  times: 1,
  duration: 1000 / 30,
  update(currDuration: number) {
    // frameDuration usually not less than 1000 / 30
    // and not greater than 1000 / 120
    const $currDuration = Math.max(
      1000 / 120,
      Math.min(1000 / 30, currDuration),
    )

    this.times += 1
    this.duration = (this.duration + $currDuration) / 2
  },
  /**
   * @return { Promise<number> }    actual duration
   * */
  correct() {
    let i = 0
    let last: number
    return new Promise<number>(res => {
      ;(function init() {
        if (typeof root.requestAnimationFrame === 'function') {
          root.requestAnimationFrame((now: number) => {
            const $now = now || new Date().getTime()
            if (last) {
              FrameDuration.update($now - last)
            }
            last = $now

            if (++i < 15) init()
            else res(FrameDuration.duration)
          })
        }
      })()
    })
  },
}

FrameDuration.correct()

export default FrameDuration
