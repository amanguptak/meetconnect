import { Platform, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { COLORS, screenWidth } from '../utils/Constants';

export const prepareStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  headerContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: COLORS.background,
  paddingHorizontal: 20,
  paddingVertical: 14,
  borderBottomLeftRadius: 24,
  borderBottomRightRadius: 24,

  // iOS shadow
  shadowColor: COLORS.black,
  shadowOpacity: 0.15,
  shadowOffset: { width: 0, height: 6 },
  shadowRadius: 10,

  // Android elevation
  elevation: 8,
},

headerTitle: {
  fontSize: RFValue(16),
  fontWeight: '700',
  color: COLORS.primary,
  textAlign: 'center',
  textShadowColor: COLORS.primary_20,
  textShadowOffset: { width: 1, height: 1 },
  textShadowRadius: 2,
},

backButton: {
  width: RFValue(34),
  height: RFValue(34),
  borderRadius: RFValue(17),
  backgroundColor: COLORS.theme,
  justifyContent: 'center',
  alignItems: 'center',
  shadowColor: COLORS.black,
  shadowOpacity: 0.2,
  shadowOffset: { width: 0, height: 3 },
  shadowRadius: 4,
  elevation: 5,
},

headerLeftIcon: {
  justifyContent: 'center',
  alignItems: 'center',
},

 

  peopleText: {
    fontSize: RFValue(16),
    fontWeight: '600',
    color: COLORS.text,
  },

  meetingCode: {
    fontSize: RFValue(18),
    fontWeight: '500',
    color: COLORS.primary,
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 6,
  },

  infoLabel: {
    fontSize: RFValue(11),
    color: COLORS.secondary,
    textAlign: 'center',
    marginBottom: 10,
  },

  camera: {
    width: screenWidth * 0.7,
    height: screenWidth * 1,
    borderRadius: 24,
    backgroundColor: COLORS.secondary_light,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginVertical: 20,

    // Shadow for iOS
    shadowColor: COLORS.black,
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,

    // Elevation for Android
    elevation: 6,
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  toggleContainer: {
    position: 'absolute',
    bottom: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    gap: 20,
  },

  iconButton: {
    backgroundColor: COLORS.primary,
    padding: 12,
    borderRadius: 50,

    shadowColor: COLORS.black,
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },

  participantStatus: {
    fontSize: RFValue(12),
    color: COLORS.text,
    textAlign: 'center',
    marginTop: 12,
    fontStyle: 'italic',
  },

  selfInfo: {
    marginTop: 16,
    alignItems: 'center',
  },

  selfAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginBottom: 4,
  },

  selfName: {
    fontSize: RFValue(12),
    fontWeight: '500',
    color: COLORS.text,
  },

  joinContainer: {
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: COLORS.secondary_light,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingBottom: Platform.OS === 'ios' ? 40 : 20,
    paddingHorizontal: 30,
  },

  joinButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 16,
    width: '100%',

    shadowColor: COLORS.black,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 4,
  },

  joinButtonText: {
    color: COLORS.white,
    fontSize: RFValue(14),
    textAlign: 'center',
    fontWeight: '600',
  },

  videoContainer: {
    paddingBottom: 20,
    paddingHorizontal: 24,
  },
});
