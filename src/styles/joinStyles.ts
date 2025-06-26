import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { COLORS } from '../utils/Constants';

export const joinStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 20,
    paddingTop: 10,
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },

  headerText: {
    fontSize: RFValue(16),
    fontFamily: 'Poppins-SemiBold',
    color: COLORS.text,
  },

  gradientButton: {
    borderRadius: 16,
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    width: '100%',
    height: '100%',
  },

  buttonText: {
    color: COLORS.white,
    fontSize: RFValue(15),
    fontFamily: 'Poppins-Medium',
  },

  orText: {
    textAlign: 'center',
    fontSize: RFValue(12),
    fontFamily: 'Poppins-Regular',
    color: COLORS.tertiary,
    marginVertical: 20,
  },

  inputContainer: {
    marginTop: 10,
  },

  labelText: {
    fontSize: RFValue(13),
    fontFamily: 'Poppins-Regular',
    color: COLORS.text,
    marginBottom: 8,
  },

  inputBox: {
    borderWidth: 1,
    borderColor: COLORS.tertiary,
    backgroundColor: COLORS.secondary_light,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: RFValue(13),
    fontFamily: 'Poppins-Regular',
    color: COLORS.text,
  },

  noteText: {
    fontSize: RFValue(11),
    fontFamily: 'Poppins-Regular',
    color: COLORS.tertiary,
    marginTop: 10,
    lineHeight: 16,
  },

  linkText: {
    color: COLORS.theme,
    fontFamily: 'Poppins-Medium',
    textDecorationLine: 'underline',
  },
});
