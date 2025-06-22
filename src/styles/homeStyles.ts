import { StyleSheet } from 'react-native';
import { COLORS, screenHeight, screenWidth } from '../utils/Constants';
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
    paddingBottom: 80, // reserve space for floating button
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

  img: {
    width: screenWidth * 0.5,
    height: screenHeight * 0.3,
    resizeMode: 'contain',
    alignSelf: 'center',
    margin: 15,
    marginTop: screenHeight * 0.1,
  },

  buttonText: {
    color: COLORS.white,
    fontSize: RFValue(13),
    fontFamily: 'Poppins-Medium',
    marginLeft: 8,
  },

  absoluteButton: {
    position: 'absolute',
    bottom: 25,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 30,
    backgroundColor: COLORS.primary,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10, // Android shadow
  },

  sessionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    elevation: 2,
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: COLORS.black,
    shadowOpacity: 0.1,
    shadowRadius: 16,
    shadowOffset: { width: 1, height: 1 },
    marginHorizontal: 5,
  },

  sessionTextContainer: {
    flex: 1,
    marginHorizontal: 10,
  },

  sessionTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: RFValue(14),
    color: COLORS.text,
  },

  sessionTime: {
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(12),
    color: COLORS.text,
    opacity: 0.7,
  },

  joinButton: {
    backgroundColor: COLORS.theme,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },

  joinButtonText: {
    color: COLORS.white,
    fontFamily: 'Poppins-Medium',
    fontSize: RFValue(12),
  },
});
