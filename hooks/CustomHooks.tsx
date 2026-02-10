import React, { useReducer, useState } from 'react';
import { StyleSheet, Text, TextInput, View,Button, Pressable, ScrollView } from 'react-native';

type TaskActions=
    |{type:'DELETE'; id:string}
    |{type:'ADD'; task:Task}


export interface Task{
    id:string;
    name:string;
     
 
}


function reducer(state: Task[], action: TaskActions): Task[] {
    switch(action.type){
        case 'DELETE':
           return state = state.filter(item=> item.id !== action.id)
        case 'ADD':
            return [...state, action.task];
        default:
            return state;
    }
};

export const useTodos=()=>{
    const [tasks, dispatch] = useReducer(reducer, []);
   

      let id = tasks.length -1;
    const handleDelete = (id: string) => {
        dispatch({type:"DELETE", id});
    }
    const addTask=(title:string)=>{
        id++
        if(title.trim()){
            dispatch({type: "ADD", task:{id:id.toString(), name:title}})
        
        }
        
      
    }

    return {tasks, handleDelete, addTask}
      
}

