declare const FrameDuration: {
  times: number
  duration: number
  update(currDuration: number): void
  /**
   * @return { Promise<number> }    actual duration
   * */
  correct(): Promise<number>
}

export default FrameDuration
