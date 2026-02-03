import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View,Button, Pressable, ScrollView } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import {Task} from '../components/TaskList'
const[done,setDone] = useState(false)
const Row = ({ id, name, description }: Task) => (
    
<View>
<Pressable onPress={()=>{
    if(done){
    setDone(true)
    }
    setDone(false)
    }}>

<View style={styles.list}>
{done&&(
<>
    <Text style={styles.text}>{id}</Text>
    <Text style={styles.text}>{name}</Text>
    <Text style={styles.text}>{description}</Text>
</>
)}:{!done &&(
    <>
    <Text style={styles.textClicked}>{id}</Text>
    <Text style={styles.textClicked}>{name}</Text>
    <Text style={styles.textClicked}>{description}</Text>
    </>
)}



</View>
</Pressable>
</View>
);
const styles = StyleSheet.create({
 
  list:{
backgroundColor: '#f9f9f9',
borderBottomWidth: 1,
borderColor: '#eee',
padding: 16,
  },
  text:{

  },textClicked:{
    textDecorationLine:'line-through'
  }
 
});
export default Row