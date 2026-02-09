import React, { useReducer, useState } from 'react';
import { StyleSheet, Text, TextInput, View,Button, Pressable, ScrollView } from 'react-native';

type TaskActions=
    |{type:'DELETE'; id:string}
    |{type:'ADD'; task:Task}


export interface Task{
  id:string;
  name:string;

  
 
}
const initialTasks: Task[] = [];

const reducer = (state: Task[], action: TaskActions): Task[] => {
    switch(action.type){
        case 'DELETE':
            return state.filter(task => task.id !== action.id);
        case 'ADD':
            return [...state, action.task];
        default:
            return state;
    }
};

export const useTodos=()=>{
    const [tasks, dispatch] = useReducer(reducer, initialTasks);
   

      let id = tasks.length -1;
    const handleDelete = (id: string) => {
        dispatch({type:"DELETE", id: id});
    };
    const addTask=(title:string)=>{
        id++
        if(title.trim()){
            const newTask:Task={
            id:id.toString(), name:title
            }
            dispatch({type: "ADD", task:newTask})
        
        }
      
    }

    return {tasks, handleDelete, addTask}
      
}

