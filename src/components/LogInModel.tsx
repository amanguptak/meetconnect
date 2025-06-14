
import 'react-native-get-random-values'
import { Text, View, StyleSheet, Alert } from 'react-native';
import { useUserStore } from '../services/userStore';
import { useEffect, useState } from 'react';
import {v4 as uuidv4} from "uuid"
interface LogInModelProps {
    visible:boolean,
    onClose:any,
}

const LogInModel = ({visible,onClose}: LogInModelProps) => {
  const {setUser , user} = useUserStore()
  const [username , setUserName] = useState('')
  const [photoUrl , setPhotoUrl] = useState('')

  useEffect(()=>{
    if(visible){
      const storedName = user?.name
      const storedPhoto = user?.photoUrl
      setUserName(storedName || ""),
      setPhotoUrl(storedPhoto|| '')
    }

  },[visible])

  const handleSave = ()=>{
    if(username && photoUrl){
      setUser({
        id:uuidv4,
        name:username,
        photoUrl:photoUrl
      })

      onClose()
    }else{
      Alert.alert('Please fill your details first')
    }
  }

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
