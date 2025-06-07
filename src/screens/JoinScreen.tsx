import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface JoinScreenProps {}

const JoinScreen = ({}: JoinScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>JoinScreen</Text>
    </View>
  );
};

export default JoinScreen;

const styles = StyleSheet.create({
  container: {}
});
