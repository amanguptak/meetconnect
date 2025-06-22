import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Alert,
  FlatList,
} from 'react-native';
import {homeStyles} from '../styles/homeStyles';
import HomeHeader from '../components/HomeHeader';
import {Calendar, Video} from 'lucide-react-native';
import {useUserStore} from '../services/userStore';
import {navigate} from '../utils/NavigationUtils';
import {COLORS} from '../utils/Constants';
import {checkSession} from '../services/api/session';
import {useWSocket} from '../services/api/WSContext';
import {addHyphens, removeHyphens} from '../utils/Helpers';
import {useMeetStore} from '../services/meetStore';
import {RFValue} from 'react-native-responsive-fontsize';

import {createParticipantFromUser} from '../utils/formatter';
import EmptyState from '../components/EmptyFound';

const HomeScreen = () => {
  const {user, sessions, addSession, removeSession} = useUserStore();
  const {addParticipant, removeParticipant, setSessionId} = useMeetStore();

  const {emit} = useWSocket();
  const handleNavigation = () => {
    if (!user?.name) {
      Alert.alert('Login before joining the meeting');
      return navigate('Home');
    }
    navigate('JoinScreen');
  };

  const joinViaSessionId = async (id: string) => {
    if (!user?.name) {
      Alert.alert('Login before joining the meeting');
      return navigate('Home');
    }
    const isAvailable = await checkSession(id);
    if (isAvailable) {
      emit('prepare-session', {
        userId: user?.id,
        sessionId: removeHyphens(id),
      });

      // If the meeting is live, you emit a socket event with both your user ID and the
      //  hyphens-stripped session ID, record that ID in your user store’s history, tell the meet
      //  store which session you’re entering, add your own participant object to the meet store, and
      //   finally navigate to the “Prepare” screen where the actual meeting setup continues.

      addSession(id);
      setSessionId(removeHyphens(id));
      addParticipant(createParticipantFromUser(user));

      navigate('PrepareScreen');
    } else {
      removeSession(id);
      setSessionId(null);
      removeParticipant(user.id);
      Alert.alert('There is no meeting found');
    }
  };

  const renderSessions = ({item}: {item: string}) => {
    return (
      <View style={homeStyles.sessionContainer}>
        <Calendar size={RFValue(20)} color={COLORS.secondary_light} />
        <View style={homeStyles.sessionTextContainer}>
          <Text style={homeStyles.sessionTitle}>{addHyphens(item)}</Text>
          <Text style={homeStyles.sessionTitle}>
            Join and Connect with Loved Ones.
          </Text>
        </View>
        <TouchableOpacity
          style={homeStyles.joinButton}
          onPress={() => joinViaSessionId(item)}>
          <Text style={homeStyles.joinButtonText}>Join</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={homeStyles.safeArea}>
      <View style={homeStyles.container}>
        <HomeHeader />
        <FlatList
          data={sessions}
          renderItem={renderSessions}
          keyExtractor={item => item}
          contentContainerStyle={{padding: 20}}
          ListEmptyComponent={
            <EmptyState message="No sessions yet join a meeting to get started!" />
          }
        />
        <TouchableOpacity
          style={homeStyles.absoluteButton}
          onPress={handleNavigation}>
          <Video size={18} color={COLORS.white} />
          <Text style={homeStyles.buttonText}>Join</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

// code explanation

// Your `HomeScreen` is a self-contained component that ties together your user state, your meeting state, socket communication, and your navigation flow, all rendered inside a safe area with a list of past sessions and a big “Join” button.

// When the component mounts, you grab two pieces of state from your user store: the logged-in `user` (or `null` if they haven’t signed in) and `sessions`, which is just an array of the raw session strings you’ve previously saved. From your meet store you pull in three actions: `addParticipant`, `removeParticipant`, and `setSessionId`; these together manage which “room” you’re in and who is sitting in it. You also grab your socket emitter so you can fire off events to the server.

// At the top right, your `handleNavigation` function checks if there’s a user name; if not, it pops up an alert asking them to log in before letting them go to the join-screen. If they are logged in, it simply navigates to that screen.

// The heart of the screen is the `joinViaSessionId` function. It takes a session code (the raw string from your list), checks that the user is logged in, then calls your `checkSession` API to see if the meeting exists. If the meeting isn’t there, you remove that session from both your user store and the meet store, take yourself out of the participants list, clear the stored session ID, and alert the user that nothing was found. If the meeting is live, you emit a socket event with both your user ID and the hyphens-stripped session ID, record that ID in your user store’s history, tell the meet store which session you’re entering, add your own participant object to the meet store, and finally navigate to the “Prepare” screen where the actual meeting setup continues.

// Visually, you render a header component at the top, then a `FlatList` whose `data` is the `sessions` array. For each session string you call your `renderSessions` function, which draws a little row: a calendar icon, the prettified session code, a tagline, and a “Join” button. Tapping that button invokes `joinViaSessionId(item)`, passing exactly that session’s string into your logic. If there are no sessions at all, the list simply shows nothing (you could drop in a friendly message there if you like).

// Finally, there’s a floating “Join” button pinned to the bottom (using your `absoluteButton` style) with a video-camera icon and the word “Join.” That button always takes you to the generic join screen (via `handleNavigation`) so you can enter a new code by hand.

// Across the board you’re handling state from two stores, API calls, socket emits, conditional navigation, and list rendering—all wired up in a straightforward React Native component.
