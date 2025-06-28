// import React, {useEffect, useState} from 'react';
// import {
//   Text,
//   View,
//   StyleSheet,
//   SafeAreaView,
//   ScrollView,
//   Image,
//   TouchableOpacity,
// } from 'react-native';
// import {RTCView, mediaDevices, MediaStream} from 'react-native-webrtc';

// import {useWSocket} from '../services/api/WSContext';
// import {useMeetStore} from '../services/meetStore';
// import {useUserStore} from '../services/userStore';

// import {addHyphens, requestPermissions} from '../utils/Helpers';
// import {goBack, replace} from '../utils/NavigationUtils';
// import {Participant} from '../../types/storetype';
// import {prepareStyles} from '../styles/prepareStyles';
// import {ChevronLeft, Mic, MicOff, Video, VideoOff} from 'lucide-react-native';
// import {RFValue} from 'react-native-responsive-fontsize';
// import {COLORS} from '../utils/Constants';
// // import { SafeAreaView } from 'react-native-safe-area-context';

// const PrepareScreen: React.FC = () => {
//   const {emit, on, off} = useWSocket();
//   const {addParticipant, sessionId, setSessionId, micOn, videoOn, toggleState} =
//     useMeetStore();
//   const {user} = useUserStore();

//   const [localStream, setLocalStream] = useState<MediaStream | null>(null);
//   const [participants, setParticipants] = useState<Participant[]>([]);

//   useEffect(() => {
//     const audioTrack = localStream?.getAudioTracks()[0];
//     if (audioTrack) {
//       audioTrack.enabled = micOn;
//     }
//   }, [micOn, localStream]);

//   useEffect(() => {
//     const videoTrack = localStream?.getVideoTracks()[0];
//     if (videoTrack) {
//       videoTrack.enabled = videoOn;
//     }
//   }, [videoOn, localStream]);

//   const showMediaDevices = (audio: boolean, video: boolean) => {
//     mediaDevices
//       .getUserMedia({audio, video})
//       .then(stream => setLocalStream(stream))
//       .catch(err => console.error('Error getting media devices', err));
//   };

//   const toggleLocal = (type: 'mic' | 'video') => {
//     toggleState(type);
//   };

//   const fetchMediaPermissions = async () => {
//     const result = await requestPermissions();
//     if (!result.isCameraGranted) {
//       toggleLocal('video');
//     }
//     if (result.isMicrophoneGranted) {
//       toggleLocal('mic');
//     }
//     showMediaDevices(result.isMicrophoneGranted, result.isCameraGranted);
//   };

//   const handleStartCall = () => {
//     try {
//       emit('join-session', {
//         name: user?.name,
//         photo: user?.photoUrl,
//         userId: user?.id,
//         sessionId,
//         micOn,
//         videoOn,
//       });
//       participants.forEach(addParticipant);
//       setSessionId(sessionId);
//       replace('LiveMeetScreen');
//     } catch (err) {
//       console.error('Failed to start call:', err);
//     }
//   };

//   const renderParticipantText = () => {
//     if (!participants?.length) {
//       return 'No one is in the call yet';
//     }
//     const names = participants
//       ?.slice(0, 2)
//       ?.map(p => p.name)
//       ?.join(',');
//     const counts =
//       participants.length > 2 ? `and ${participants.length - 2} others` : '';

//     return `${names}${counts} in the call`;
//   };

//   useEffect(() => {
//     const handleParticipants = (updatedParticipants: Participant[]) => {
//       setParticipants(updatedParticipants);
//       // setParticipants(updatedParticipants?.participants);
//     };

//     on('session-info', handleParticipants);

//     return () => {
//       off('session-info', handleParticipants);
//       if (localStream) {
//         localStream.getTracks().forEach(track => track.stop());
//         localStream.release?.();
//         setLocalStream(null);
//       }
//     };
//   }, [sessionId, on, off, localStream]);

//   useEffect(() => {
//     fetchMediaPermissions();
//   }, []);

//   return (
//     <View style={prepareStyles.container}>
//       <SafeAreaView />
//       <View style={prepareStyles.headerContainer}>
//         <Text style={prepareStyles.peopleText}>Prepare Screen</Text>
//         <ChevronLeft
//           size={RFValue(22)}
//           onPress={() => {
//             goBack();
//             setSessionId(null);
//           }}
//           color={COLORS.text}
//         />
//       </View>

//       <ScrollView contentContainerStyle={{flex: 1}}>
//         <View style={prepareStyles.videoContainer}>
//           <Text style={prepareStyles.meetingCode}>{addHyphens(sessionId)}</Text>
//           <View style={prepareStyles.camera}>
//             {localStream && videoOn ? (
//               <RTCView
//                 streamURL={localStream.toURL()}
//                 style={prepareStyles.camera}
//                 objectFit="cover"
//               />
//             ) : (
//               <Image
//                 source={{uri: user?.photoUrl}}
//                 style={prepareStyles.image}
//               />
//             )}

//             <View style={prepareStyles.toggleContainer}>
//               <TouchableOpacity
//                 onPress={()=>{toggleLocal('mic')}}
//                 style={prepareStyles.iconButton}
//               >
//                   {
//                     micOn? (<Mic size={RFValue(12)} color={"#ffff"}/>):(<MicOff
//                     size={RFValue(12)} color={"#ffff"}
//                     />)
//                   }
//               </TouchableOpacity>

//                <TouchableOpacity
//                 onPress={()=>{toggleLocal('video')}}
//                 style={prepareStyles.iconButton}
//               >
//                   {
//                     videoOn? (<Video size={RFValue(12)} color={"#ffff"}/>):(<VideoOff
//                     size={RFValue(12)} color={"#ffff"}
//                     />)
//                   }
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// export default PrepareScreen;



import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
 
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { RTCView, mediaDevices, MediaStream } from 'react-native-webrtc';

import { useWSocket } from '../services/api/WSContext';
import { useMeetStore } from '../services/meetStore';
import { useUserStore } from '../services/userStore';

import { addHyphens, requestPermissions } from '../utils/Helpers';
import { goBack, replace } from '../utils/NavigationUtils';
import { Participant, SessionInfoPayload } from '../../types/storetype';
import { prepareStyles } from '../styles/prepareStyles';
import { ChevronLeft, Mic, MicOff, Video, VideoOff } from 'lucide-react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { COLORS } from '../utils/Constants';
import { SafeAreaView } from 'react-native-safe-area-context';

const PrepareScreen: React.FC = () => {
  const { emit, on, off } = useWSocket();
  const {
    addParticipant,
    sessionId,
    setSessionId,
    micOn,
    videoOn,
    toggleState,
  } = useMeetStore();
  const { user } = useUserStore();

  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [participants, setParticipants] = useState<Participant[]>([]);

  useEffect(() => {
    const audioTrack = localStream?.getAudioTracks()[0];
    if (audioTrack) {audioTrack.enabled = micOn;}
  }, [micOn, localStream]);

  useEffect(() => {
    const videoTrack = localStream?.getVideoTracks()[0];
    if (videoTrack) {videoTrack.enabled = videoOn;}
  }, [videoOn, localStream]);

  const showMediaDevices = (audio: boolean, video: boolean) => {
    mediaDevices
      .getUserMedia({ audio, video })
      .then((stream) => setLocalStream(stream))
      .catch((err) => console.error('Error getting media devices', err));
  };

  const toggleLocal = (type: 'mic' | 'video') => {
    toggleState(type);
  };

  const fetchMediaPermissions = async () => {
    const result = await requestPermissions();
    if (!result.isCameraGranted) toggleLocal('video');
    if (result.isMicrophoneGranted) toggleLocal('mic');
    showMediaDevices(result.isMicrophoneGranted, result.isCameraGranted);
  };

  const handleStartCall = () => {
    try {
      emit('join-session', {
        name: user?.name,
        photo: user?.photoUrl,
        userId: user?.id,
        sessionId,
        micOn,
        videoOn,
      });
      participants.forEach(addParticipant);
      setSessionId(sessionId);
      replace('LiveScreen');
    } catch (err) {
      console.error('Failed to start call:', err);
    }
  };

  const renderParticipantText = () => {
    console.log('participants',participants)
    if (!participants?.length) {return 'Waiting for others to join...';}
    const names = participants.slice(0, 2).map(p => p.name).join(', ');
    const extra = participants.length > 2 ? ` and ${participants.length - 2} others` : '';
    return `${names}${extra} joined`;
  };

  useEffect(() => {
    const handleParticipants = (data: SessionInfoPayload) => {
      //data coming from backend
       setParticipants(data?.participants);
    };
    on('session-info', handleParticipants);
    return () => {
      off('session-info', handleParticipants);
      if (localStream) {
        localStream.getTracks().forEach((track) => track.stop());
        localStream.release?.();
        setLocalStream(null);
      }
    };
  }, [sessionId, on, off, localStream]);

  useEffect(() => {
    fetchMediaPermissions();
  }, []);

  return (
    <SafeAreaView style={prepareStyles.container}>
   <View style={prepareStyles.headerContainer}>
  <View style={prepareStyles.headerLeftIcon}>
    <TouchableOpacity
      onPress={() => {
        goBack();
        setSessionId(null);
      }}
      style={prepareStyles.backButton}
    >
      <ChevronLeft size={RFValue(18)} color={COLORS.white} />
    </TouchableOpacity>
  </View>

  <Text style={prepareStyles.headerTitle}>Prepare Room</Text>

  {/* placeholder to balance spacing */}
  <View style={{ width: RFValue(38) }} />
</View>


      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        <View style={prepareStyles.videoContainer}>
          <Text style={prepareStyles.meetingCode}>{addHyphens(sessionId)}</Text>

          <Text style={prepareStyles.infoLabel}>Share this code to invite others</Text>

          <View style={prepareStyles.camera}>
            {localStream && videoOn ? (
              <RTCView
                streamURL={localStream.toURL()}
                style={prepareStyles.camera}
                objectFit="cover"
              />
            ) : (
              <Image
                source={{ uri: user?.photoUrl }}
                style={prepareStyles.image}
              />
            )}
            <View style={prepareStyles.toggleContainer}>
              <TouchableOpacity onPress={() => toggleLocal('mic')} style={prepareStyles.iconButton}>
                {micOn ? <Mic size={RFValue(16)} color="#fff" /> : <MicOff size={RFValue(16)} color="#fff" />}
              </TouchableOpacity>
              <TouchableOpacity onPress={() => toggleLocal('video')} style={prepareStyles.iconButton}>
                {videoOn ? <Video size={RFValue(16)} color="#fff" /> : <VideoOff size={RFValue(16)} color="#fff" />}
              </TouchableOpacity>
            </View>
          </View>

          <Text style={prepareStyles.participantStatus}>{renderParticipantText()}</Text>

          <View style={prepareStyles.selfInfo}>
            <Image source={{ uri: user?.photoUrl }} style={prepareStyles.selfAvatar} />
            <Text style={prepareStyles.selfName}>{user?.name}</Text>
          </View>
        </View>

        <View style={prepareStyles.joinContainer}>
          <TouchableOpacity style={prepareStyles.joinButton} onPress={handleStartCall}>
            <Text style={prepareStyles.joinButtonText}>Join Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PrepareScreen;
