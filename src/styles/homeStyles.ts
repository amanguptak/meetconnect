import { StyleSheet } from 'react-native';
import { COLORS } from '../utils/Constants';
import { RFValue } from 'react-native-responsive-fontsize';

export const homeStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 10,
    paddingBottom: 80,
  },

  title: {
    fontFamily: 'Poppins-Medium',
    color: COLORS.text,
    fontSize: RFValue(15),
    textAlign: 'center',
  },

  subTitle: {
    fontFamily: 'Poppins-Regular',
    color: COLORS.text,
    fontSize: RFValue(12),
    opacity: 0.6,
    marginTop: 5,
    textAlign: 'center',
    width: '93%',
    alignSelf: 'center',
  },

  absoluteButton: {
    position: 'absolute',
    bottom: 25,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    backgroundColor: COLORS.primary,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },

  buttonText: {
    color: COLORS.white,
    fontSize: RFValue(13),
    fontFamily: 'Poppins-Medium',
    marginLeft: 8,
  },

  sessionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.secondary_light,
    borderRadius: 16,
    padding: 16,
    marginVertical: 10,
    marginHorizontal: 5,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 6,
  },

  sessionIcon: {
    backgroundColor: COLORS.secondary,
    padding: 10,
    borderRadius: 10,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },

  sessionTextContainer: {
    flex: 1,
    marginHorizontal: 12,
  },

  sessionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: RFValue(14),
    color: COLORS.text,
  },

  sessionSubtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(12),
    color: COLORS.tertiary,
    marginTop: 3,
  },

  joinButton: {
    backgroundColor: COLORS.theme,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },

  joinButtonText: {
    color: COLORS.white,
    fontFamily: 'Poppins-Medium',
    fontSize: RFValue(12),
  },
});
