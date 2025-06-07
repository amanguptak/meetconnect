import {useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {resetAndNavigate} from '../utils/NavigationUtils';
import { screenHeight, screenWidth } from '../utils/Constants';

interface SplashScreenProps {}

const SplashScreen = ({}: SplashScreenProps) => {
  useEffect(() => {
    const timerId = setTimeout(() => {
      resetAndNavigate('Home');
    }, 2000);

    return () => clearTimeout(timerId);
  }, []);
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/meetconnect.png')}
        style={styles.image}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#fbefdc',
  },
  image:{
    width: screenWidth*0.7,
    height:screenHeight*0.7,
    resizeMode:'contain'
  }
});
