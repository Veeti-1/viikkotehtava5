import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TaskList from './components/TaskList';
export default function App() {
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tasks</Text>
     <View style={styles.listContainer}>
     <TaskList/>

      </View>
       
      <StatusBar style="auto" />
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'baseline',
    justifyContent: 'center',
  },
  listContainer:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'baseline',
    justifyContent: 'center',
  },
  title:{
    marginLeft:50,
    marginTop:20,
  }
  
});
