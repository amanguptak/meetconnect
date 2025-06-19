import 'react-native-get-random-values';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { useUserStore } from '../services/userStore';
import { inquiryStyles } from '../styles/inquiryStyles';

interface LogInModelProps {
  visible: boolean;
  onClose: () => void;
}

const LogInModel = ({ visible, onClose }: LogInModelProps) => {
  const { setUser, user } = useUserStore();
  const [username, setUserName] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');

  useEffect(() => {
    if (visible) {
      setUserName(user?.name ?? '');
      setPhotoUrl(user?.photoUrl ?? '');
    }
  }, [visible]);

  const handleSave = () => {
    if (!username.trim() || !photoUrl.trim()) {
      return Alert.alert('Please fill both fields');
    }
    setUser({
      id: user?.id ?? uuidv4(),
      name: username.trim(),
      photoUrl: photoUrl.trim(),
    });
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      <Pressable style={inquiryStyles.modalContainer} onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={inquiryStyles.keyboardAvoidingView}
        >
          <ScrollView contentContainerStyle={inquiryStyles.scrollViewContent}>
            <View style={inquiryStyles.modalContent}>
              <Text style={inquiryStyles.title}>Enter Your Details</Text>

              <TextInput
                style={inquiryStyles.input}
                placeholder="Your Name"
                placeholderTextColor="#999"
                value={username}
                onChangeText={setUserName}
              />

              <TextInput
                style={inquiryStyles.input}
                placeholder="Photo URL"
                placeholderTextColor="#999"
                value={photoUrl}
                onChangeText={setPhotoUrl}
                keyboardType="url"
                autoCapitalize="none"
              />

              <View style={inquiryStyles.buttonContainer}>
                <TouchableOpacity
                  style={inquiryStyles.button}
                  onPress={handleSave}
                >
                  <Text style={inquiryStyles.buttonText}>Save</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[inquiryStyles.button, inquiryStyles.cancelButton]}
                  onPress={onClose}
                >
                  <Text style={inquiryStyles.buttonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </Pressable>
    </Modal>
  );
};

export default LogInModel;
