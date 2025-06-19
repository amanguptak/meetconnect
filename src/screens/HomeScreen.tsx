
import {StyleSheet,SafeAreaView, View } from 'react-native';
import HomeHeader from '../components/HomeHeader';

interface HomeScreenProps {}

const HomeScreen = ({}: HomeScreenProps) => {
  return (
    <View style={styles.container}>
      <HomeHeader/>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {}
});
