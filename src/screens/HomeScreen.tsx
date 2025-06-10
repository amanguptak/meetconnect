import * as React from 'react';
import { Text,StyleSheet,SafeAreaView } from 'react-native';

interface HomeScreenProps {}

const HomeScreen = ({}: HomeScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>HomeScreen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {}
});
