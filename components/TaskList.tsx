import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View,Button, Pressable, ScrollView } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import Row from './Row';
import { Task } from '../hooks/CustomHooks'
import {useTodos} from '../hooks/CustomHooks'

export interface TaskProps{
  id:string;
  name:string;
  onDelete:(id:string) => void;
}



export default function TaskList(){
    const {tasks, addTask,handleDelete} = useTodos()
    const [taskTitle,setTaskTitle] = useState('')    
    return(
        <View style={styles.container}>
            <View style={styles.inputContainer}>
              <View>
                <TextInput
                
                style={styles.input}
                value={taskTitle}
                onChangeText={setTaskTitle}
                placeholder='Add new Task'
                />
                </View>
                <View>
               <Button
                title="Save" 
                onPress={()=>{
                    addTask(taskTitle)
                    setTaskTitle('')
                }}
                
                />
                </View>
               
            </View>
              
                <ScrollView>
                  
                   {tasks.map((item)=>(
                    
                   
                    <Row
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    onDelete={handleDelete}            
                    />
                  
                   ))}
                   
                </ScrollView>
                </View>
    
    );
}
const styles = StyleSheet.create({
  container: {
    marginTop:50,
    backgroundColor: '#fff',
  },
  list:{
    backgroundColor: '#ffffffff',
    borderBottomWidth: 1,
    borderColor: '#ffffffff',
    padding: 16,
  },
  rowBack: {
    backgroundColor: '#ffffffff',
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 10,
  },
  input:{
    margin:5,
    width:200,
    height:50,
    borderColor:'#000000',
    borderWidth:1,
  },
  text:{

  },
  inputContainer:{
    flexDirection:'row',
    alignItems:'center'
  }
});