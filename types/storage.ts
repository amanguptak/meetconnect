export interface StorageAPI {
  /** Store a string value under the given key */
  setItem(key: string, value: string): void

  /** Retrieve a string value, or null if not present */
  getItem(key: string): string | null

  /** Remove the value for the given key */
  removeItem(key: string): void
}