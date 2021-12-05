export default class LocalStorage {
  private readonly available: boolean;
  private readonly key: string;

  static isLocalStorageAvailable(): boolean {
    const test = "test";
    try {
      if (typeof window === "undefined") {
        return false;
      }
      window.localStorage.setItem(test, test);
      window.localStorage.removeItem(test);
      return true;
    } catch (error) {
      return false;
    }
  }

  constructor(key: string) {
    this.key = key;
    this.available = LocalStorage.isLocalStorageAvailable();
  }

  async read(): Promise<void> {
    if (!this.available) {
      return Promise.reject();
    }

    const data = window.localStorage.getItem(this.key);
    if (data === null) {
      return Promise.resolve();
    }
    return JSON.parse(data);
  }

  async write(data: string | Record<string, unknown>): Promise<void> {
    if (!this.available || typeof window === "undefined") {
      return Promise.reject();
    }

    window.localStorage.setItem(this.key, JSON.stringify(data));
  }
}
