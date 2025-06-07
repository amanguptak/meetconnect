import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface LiveScreenProps {}

const LiveScreen = ({}: LiveScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>LiveScreen</Text>
    </View>
  );
};

export default LiveScreen;

const styles = StyleSheet.create({
  container: {}
});
