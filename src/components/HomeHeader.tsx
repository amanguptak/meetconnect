import {Text, View, StyleSheet} from 'react-native';
import {UserStore} from '../../types/storetype';
import {useEffect, useState} from 'react';
import {useUserStore} from '../services/meetStore';
import LogInModel from './LogInModel';

interface HOmeHeaderProps {}

const HOmeHeader = ({}: HOmeHeaderProps) => {
  const [visible, setVisible] = useState(false);
  const {user} = useUserStore();

  useEffect(() => {
    const checkUserName = () => {
      const storedName = user?.name;
      if (!storedName) {
        setVisible(true);
      }
    };
    checkUserName();
  }, []);
  return (
    <View style={styles.container}>
      <Text>HOmeHeader</Text>
      <LogInModel onClose={setVisible} visible={visible} />
    </View>
  );
};

export default HOmeHeader;

const styles = StyleSheet.create({
  container: {},
});
