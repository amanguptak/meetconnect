import {MMKV} from 'react-native-mmkv';
import {StorageAPI} from '../../types/storage';

export const storage = new MMKV({
  id: 'user-storage',
  encryptionKey: 'storage-secret',
});

export const mmkvStorage: StorageAPI = {
  setItem: (key, value) => {
    storage.set(key, value);
  },

  getItem: key => {
    const value = storage.getString(key);
    return value ?? null;
  },
  removeItem: key => {
    storage.delete(key);
  },
};
