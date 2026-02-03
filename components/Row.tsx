
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View,Button, Pressable, ScrollView } from 'react-native';

import {Task} from '../components/TaskList'
export default function Row ({ id, name }: Task){
  const [done,setDone] = useState(false);

  useEffect(()=>{
    if(done){
      setDone(true)
    }else{
      setDone(false)
    }
  },[done,setDone])
  return(
<View>
  
<View style={styles.list}>

    <Text style={styles.text}>{id}</Text>
    <Text onPress={()=>{setDone(true)}} style={[{textDecorationLine: done ? 'line-through':'none'}]}>{name}</Text>
    
</View>

</View>
);
}

    

const styles = StyleSheet.create({
 
  list:{
backgroundColor: '#f9f9f9',
borderBottomWidth: 1,
borderColor: '#eee',
padding: 16,
  },
  text:{}

 
});

