import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface LogInModelProps {
    visible:boolean,
    onClose:any,
}

const LogInModel = ({}: LogInModelProps) => {
  return (
    <View style={styles.container}>
      <Text>LogInModel</Text>
    </View>
  );
};

export default LogInModel;

const styles = StyleSheet.create({
  container: {}
});
