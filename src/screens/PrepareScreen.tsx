import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface PrepareScreenProps {}

const PrepareScreen = ({}: PrepareScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>PrepareScreen</Text>
    </View>
  );
};

export default PrepareScreen;

const styles = StyleSheet.create({
  container: {}
});
