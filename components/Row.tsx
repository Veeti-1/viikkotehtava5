
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View,Button, Pressable, ScrollView } from 'react-native';
import {useTodos} from '../hooks/CustomHooks'
import {Task} from '../hooks/CustomHooks'
export default function Row ({ id, name }: Task){
  const [done,setDone] = useState(false);
   const {handleDelete} = useTodos()
 
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
          handleDelete(id)
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

