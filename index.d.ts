declare class FrameDuration {
  times: number

  duration: number

  constructor(defaultDuration?: number)

  update(currDuration: number): void
}

export default FrameDuration
