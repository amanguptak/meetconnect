import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { VideoIcon } from 'lucide-react-native';
import LogInModel from './LogInModel';
import { useUserStore } from '../services/userStore';
import { headerStyles } from '../styles/headerStyles';

const HomeHeader = () => {
  const [visible, setVisible] = useState(false);
  const { user } = useUserStore();

  useEffect(() => {
    if (!user?.name) setVisible(true);
  }, [user?.name]);

  return (
    <>
      <SafeAreaView style={headerStyles.safeContainer}>
        <View style={headerStyles.container}>
          <View style={headerStyles.leftSection}>
            {user?.photoUrl ? (
              <Image source={{ uri: user.photoUrl }} style={headerStyles.avatar} />
            ) : (
              <View style={headerStyles.avatarPlaceholder}>
                <Text style={headerStyles.placeholderLetter}>
                  {user?.name?.[0]?.toUpperCase() || 'U'}
                </Text>
              </View>
            )}
            <View style={headerStyles.textContainer}>
              <Text style={headerStyles.appTitle}>MeetConnect</Text>
              <Text style={headerStyles.usernameText}>{user?.name || 'Guest'}</Text>
            </View>
          </View>

          <TouchableOpacity
            style={headerStyles.callButton}
            onPress={() => setVisible((prev) => !prev)}
          >
            <VideoIcon size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <LogInModel visible={visible} onClose={() => setVisible(false)} />
    </>
  );
};

export default HomeHeader;
