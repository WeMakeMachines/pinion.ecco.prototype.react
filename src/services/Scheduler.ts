export default class Scheduler {
  private readonly callback: () => void;
  private readonly period: number;
  private readonly immediateExecute: boolean;

  constructor(callback: () => void, period: number, immediateExecute: boolean) {
    this.callback = callback;
    this.period = period;
    this.immediateExecute = immediateExecute;

    if (this.immediateExecute) {
      this.callback();
    }

    setInterval(this.callback, this.period);
  }
}
