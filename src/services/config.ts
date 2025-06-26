// import { Platform } from 'react-native';

// export const BASE_URL =
//   Platform.OS === 'android'
//     ? 'http://10.0.2.2:3000'   // Android emulator loopback to host
//     : 'http://localhost:3000'; // iOS simulator can use localhost

// export const SOCKET_URL =
//   Platform.OS === 'android'
//     ? 'ws://10.0.2.2:3000'
//     : 'ws://localhost:3000';


import { Platform } from 'react-native';

const LOCAL_IP = '192.168.1.38'; // Replace with your machine IP (on Wi-Fi)

export const BASE_URL =
  Platform.OS === 'android'
    ? __DEV__
      ? 'http://10.0.2.2:3000' // Android Emulator
      : `http://${LOCAL_IP}:3000` // Android Real Device
    : `http://${LOCAL_IP}:3000`; // iOS Sim + iOS Device

export const SOCKET_URL = BASE_URL.replace('http', 'ws');
