import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View,Button, Pressable } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';

const KEY = 'TASK_LIST_ITEMS';


interface Task{
  id:string;
  name:string;
  description:string;
  
 
}

export default function TaskList(){
    const [tasks,setTasks] = useState<Task[]>([])
    const [taskTitle,setTaskTitle] = useState('')
    const [description,setdDscription] = useState('')
    const[done,setDone] = useState(false)
    let id = tasks.length -1 + AsyncStorage.getAllKeys.length - 1;
  
     useEffect(()=>{
        loadSavedTasks();
       },[])
       const loadSavedTasks =async()=>{
         try{
            console.log(tasks, ':Taskit:muistissa')
            const json = await AsyncStorage.getItem(KEY)
            if(json)setTasks(JSON.parse(json))
            id=AsyncStorage.getAllKeys.length
            }catch(e)
            {
            console.log(e)
            }
       }
       useEffect(()=>{
    
        AsyncStorage.setItem(KEY,JSON.stringify(tasks))
    
       },[tasks,setTasks])
   
    const addTask=()=>{
        id++
        if(taskTitle.trim() && description.trim()){
            setTasks(prev =>[
            ...prev,
            {id:id.toString(), name:taskTitle, description:description}
        ])
       
        setTaskTitle('')
        setdDscription('')
        }
      
    }
    return(
        <View style={styles.container}>
            <Text>Tasks</Text>
            <View>
                <TextInput
                style={styles.input}
                value={taskTitle}
                onChangeText={setTaskTitle}
                placeholder='Add new Task'
                />
                <TextInput
                style={styles.input}
                value={description}
                onChangeText={setdDscription}
                placeholder='description'
                />
                <Button
                title="Add" 
                onPress={()=>{
                    
                    addTask()
                }}
                />
            </View>
            
               
                <SwipeListView
                data={tasks}
                keyExtractor={item=>item.id}
                renderItem={({item})=>(
                
                <View style={styles.list}>
                    <Text style={[{textDecorationLine: done ? 'none':'line-through'}]} onPress={()=>{
                        setDone(true)
                    }}>
                        {item.name} id: {item.id}
                        <Text>
                        {item.description}
                    </Text>
                    </Text>
                    
                </View>
               
                )}
                renderHiddenItem={()=><View style={styles.rowBack}/>}
                rightOpenValue={-75}
                disableRightSwipe
                
                />
             
                
        </View>
    );
}
const styles = StyleSheet.create({
  container: {
    marginTop:50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list:{
backgroundColor: '#f9f9f9',
borderBottomWidth: 1,
borderColor: '#eee',
padding: 16,
  },
  rowBack: {
backgroundColor: '#ddd',
flex: 1,
alignItems: 'flex-end',
justifyContent: 'center',
paddingRight: 20,
  },
  input:{
    margin:5,

    borderColor:'#000000',
    borderWidth:1,
  },
  text:{

  },
  textCliked:{
    textDecorationLine:'line-through'
  }
});