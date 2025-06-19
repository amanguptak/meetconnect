import { StyleSheet, Platform, StatusBar } from 'react-native';
import { COLORS } from '../utils/Constants';
import { RFValue } from 'react-native-responsive-fontsize';

export const headerStyles = StyleSheet.create({
  safeContainer: {
    backgroundColor: COLORS.secondary_light,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: COLORS.secondary_light,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.tertiary,
    elevation: 8,
    shadowColor: COLORS.black, // ✅ replaced '#000'
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white, // ✅ replaced '#fff'
    shadowColor: COLORS.primary,
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
  },
  avatarPlaceholder: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: COLORS.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: COLORS.primary,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  placeholderLetter: {
    fontSize: RFValue(18),
    fontFamily: 'Poppins-SemiBold',
    color: COLORS.white, // ✅ replaced '#fff'
  },
  textContainer: {
    justifyContent: 'center',
  },
  appTitle: {
    fontSize: RFValue(18),
    fontFamily: 'Poppins-Bold',
    color: COLORS.primary,
    textShadowColor: COLORS.primary_20,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  usernameText: {
    fontSize: RFValue(12),
    fontFamily: 'Poppins-Regular',
    color: COLORS.text,
    opacity: 0.6,
  },
  callButton: {
    backgroundColor: COLORS.primary,
    padding: 12,
    borderRadius: 18,
    elevation: 6,
    shadowColor: COLORS.primary,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
});
