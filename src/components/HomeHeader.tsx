
import { Text, View, StyleSheet } from 'react-native';
import { UserStore } from '../../types/storetype';
import { useState } from 'react';
import { useUserStore } from '../services/meetStore';

interface HOmeHeaderProps {}

const HOmeHeader = ({}: HOmeHeaderProps) => {
    const [visible,setVisible] = useState()
        const {user} = useUserStore()
  return (
    <View style={styles.container}>
      <Text>HOmeHeader</Text>
    </View>
  );
};

export default HOmeHeader;

const styles = StyleSheet.create({
  container: {}
});
