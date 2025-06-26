import axios from 'axios';

import {Alert} from 'react-native';
import {BASE_URL} from '../config';

export const createSession = async () => {
  try {
    const res = await axios.post(`${BASE_URL}/create-session`);
    return res?.data?.sessionId;
  } catch (err) {
    console.log('Session error at create', err);
    Alert.alert('Error  in Session');
    return null;
  }
};

export const checkSession = async (id: string) => {
  try {
    const res = await axios.get(`${BASE_URL}/is-alive?sessionId=${id}`);
    return !!res?.data?.isAlive; // convert document to true/false
  } catch (err) {
    console.log('Session error at check', err);
    return false;
  }
};
