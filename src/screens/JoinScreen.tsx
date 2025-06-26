import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ChevronLeft, EllipsisVertical, Video} from 'lucide-react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import LinearGradient from 'react-native-linear-gradient';
import {useState} from 'react';

import {joinStyles} from '../styles/joinStyles';
import {COLORS, multiColor} from '../utils/Constants';
import {goBack, navigate} from '../utils/NavigationUtils';
import {useWSocket} from '../services/api/WSContext';
import {useMeetStore} from '../services/meetStore';
import {useUserStore} from '../services/userStore';
import {checkSession, createSession} from '../services/api/session';
import {removeHyphens} from '../utils/Helpers';
import { createParticipantFromUser } from '../utils/formatter';

const JoinScreen = () => {
  const [code, setCode] = useState('');
  const {emit} = useWSocket();
  const {setSessionId, addParticipant, removeParticipant} = useMeetStore();
  const {user, addSession, removeSession} = useUserStore();

  const createNewMeet = async () => {
    const sessionId = await createSession();
    if (sessionId) {
      setSessionId(sessionId);
      addSession(sessionId);
      emit('prepare-session', {
        userId: user?.id,
        sessionId,
      });
      navigate('PrepareScreen');
    }
  };

 const joinViaSessionId = async (id: string) => {
  if (!user?.name) {
    Alert.alert('Login before joining the meeting');
    return navigate('Home');
  }

  const cleanId = removeHyphens(id); 
 

  const isAvailable = await checkSession(cleanId);

  if (isAvailable) {
    console.log('Is session available:', isAvailable);
    emit('prepare-session', {
      userId: user?.id,
      sessionId: cleanId,
    });

    addSession(id); // keep the displayed version with hyphens
    setSessionId(cleanId); // store clean version
    addParticipant(createParticipantFromUser(user));

    navigate('PrepareScreen');
  } else {
    removeSession(id);
    setSessionId(null);
    removeParticipant(user.id);
    Alert.alert('There is no meeting found');
  }
};


  return (
    <SafeAreaView style={joinStyles.container}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          {/* Header */}
          <View style={joinStyles.headerContainer}>
            <ChevronLeft
              size={RFValue(20)}
              color={COLORS.text}
              onPress={goBack}
            />
            <Text style={joinStyles.headerText}>Connect and Meet</Text>
            <EllipsisVertical size={RFValue(20)} color={COLORS.text} />
          </View>

          {/* Create Meeting Button */}
          <LinearGradient
            colors={multiColor.filter(Boolean)}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={joinStyles.gradientButton}>
            <TouchableOpacity
              style={joinStyles.button}
              activeOpacity={0.8}
              onPress={createNewMeet}>
              <Video size={RFValue(22)} color={COLORS.white} />
              <Text style={joinStyles.buttonText}>Create New Meet</Text>
            </TouchableOpacity>
          </LinearGradient>

          <Text style={joinStyles.orText}>OR</Text>

          {/* Join via Code */}
          <View style={joinStyles.inputContainer}>
            <Text style={joinStyles.labelText}>
              Enter code provided by the host:
            </Text>
            <TextInput
              style={joinStyles.inputBox}
              value={code}
              onChangeText={setCode}
              returnKeyType="done"
             onSubmitEditing={() => joinViaSessionId(code)} 
              placeholder="e.g. : akg-lkg-xyz"
              placeholderTextColor={COLORS.tertiary}
            />
            <Text style={joinStyles.noteText}>
              Note: This meeting is cloud-encrypted but not end-to-end secure.
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default JoinScreen;
