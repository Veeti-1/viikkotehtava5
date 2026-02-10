
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View,Button, Pressable, ScrollView } from 'react-native';
import {useTodos} from '../hooks/CustomHooks'
import {Task} from '../hooks/CustomHooks'
import { TaskProps } from './TaskList';


export default function Row ({ id, name ,onDelete}:TaskProps){
  const [done,setDone] = useState(false);
  
 
return(
  <View>
    <Pressable onPress={()=>{
      if(done===false){
        setDone(true)
        }
      else if(done === true){
        setDone(false)
      }
      }}
      
      >
      
      <View style={styles.list}>
        <Text style={[{textDecorationLine: done ? 'line-through':'none'}]}>{name}</Text>
        <Button
        title='Delete'
        onPress={()=>{
          onDelete(id)
        }}
        />
      </View>
    </Pressable>

  </View>
);
}

    

const styles = StyleSheet.create({
 
  list:{
    backgroundColor: '#ffffffff',
    borderBottomWidth: 1,
    borderColor: '#eee',
    padding: 16,
  },
  text:{}

 
});

