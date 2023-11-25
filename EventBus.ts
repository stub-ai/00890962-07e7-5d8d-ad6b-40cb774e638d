export class EventBus {
  private listeners: { [key: string]: Function[] } = {};

  public subscribe<T extends { new (...args: any[]): any }>(eventType: T, listener: (event: InstanceType<T>) => void): void {
    const key = eventType.name;
    if (!this.listeners[key]) {
      this.listeners[key] = [];
    }
    this.listeners[key].push(listener);
  }

  public publish<T extends { new (...args: any[]): any }>(event: InstanceType<T>): void {
    const key = event.constructor.name;
    if (!this.listeners[key]) {
      return;
    }
    this.listeners[key].forEach(listener => listener(event));
  }
}