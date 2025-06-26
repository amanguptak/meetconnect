import {Text, View, TouchableOpacity, TextInput, Alert} from 'react-native';
import {joinStyles} from '../styles/joinStyles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ChevronLeft, EllipsisVertical, Video} from 'lucide-react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {goBack, navigate} from '../utils/NavigationUtils';
import {COLORS} from '../utils/Constants';
import LinearGradient from 'react-native-linear-gradient';
import {useState} from 'react';
import {useWSocket} from '../services/api/WSContext';
import {useMeetStore} from '../services/meetStore';
import {useUserStore} from '../services/userStore';
import {checkSession, createSession} from '../services/api/session';
import {removeHyphens} from '../utils/Helpers';

interface JoinScreenProps {}

const JoinScreen = ({}: JoinScreenProps) => {
  const [code, setCode] = useState('');
  const {emit} = useWSocket();
  const {addParticipant, setSessionId, removeParticipant} = useMeetStore();
  const {user, addSession, removeSession} = useUserStore();
  const createNewMeet = async () => {
    const sessionId = await createSession();
    if (sessionId) {
      setSessionId(sessionId);
      addSession(sessionId);
      // addSessionId
      emit('prepare-session', {
        userId: user?.id,
        sessionId,
      });
      navigate('PrepareScreen');
    }
  };
  const joinViaSessionId = async () => {
    const isAvailable = await checkSession(code);
    if (isAvailable) {
      emit('prepare-session', {
        userId: user?.id,
        sessionId: removeHyphens(code),
      });
      setSessionId(code);
      addSession(code);
      navigate('PrepareScreen');
    } else {
      removeSession(code);
      removeParticipant(code);
      setCode(''), Alert.alert('There is no meeting found!');
    }
  };
  return (
    <View style={joinStyles.container}>
      <SafeAreaView />
      <View style={joinStyles.headerContainer}>
        <ChevronLeft
          size={RFValue(18)}
          onPress={() => goBack()}
          color={COLORS.text}
        />
        <Text style={joinStyles.headerText}>Connect and Meet</Text>

        <EllipsisVertical size={RFValue(18)} color={COLORS.text} />
      </View>
      <LinearGradient
        colors={['#007Df', '#B6C8Ef']}
        style={joinStyles.gradientButton}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <TouchableOpacity
          style={joinStyles.button}
          activeOpacity={0.7}
          onPress={createNewMeet}>
          <Video size={RFValue(22)} color="#ffff" />
          <Text style={joinStyles.buttonText}>Create New Meet</Text>
        </TouchableOpacity>
      </LinearGradient>
      <Text style={joinStyles.orText}>OR</Text>
      <View style={joinStyles.inputContainer}>
        <Text style={joinStyles.labelText}>
          Please enter the code provided by the host
        </Text>
        <TextInput
          style={joinStyles.inputBox}
          value={code}
          onChangeText={setCode}
          returnKeyLabel="Join"
          returnKeyType="join"
          onSubmitEditing={joinViaSessionId}
          placeholder="Example: akg-lkg-xyz"
          placeholderTextColor="#888"
        />
        <Text style={joinStyles.noteText}>
          Note:This meeting is secured with cloud encryption but not end to end.
        </Text>
      </View>
    </View>
  );
};

export default JoinScreen;
