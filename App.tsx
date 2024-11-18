import { StyleSheet, Text, View, Button, TouchableOpacity, Alert, Pressable } from 'react-native';
import {theme} from './theme'

export default function App() {

  const handleDelete = () =>{
    Alert.alert(
      "Are you sure you want to delete?",
      "It will be deleted for good.",
      [
        {
          text:"Yes",
          onPress:() => console.log("ok! deleting."),
          style:"destructive"
        },
        {
          text:"cancel",
          style:"cancel"
        },
      ],
    )
  }

  return (
    <View style={styles.container}>
      <Button title="Press Me!" />
      <TouchableOpacity onPress={handleDelete} style={styles.button} activeOpacity={0.8}>
       <Text style={styles.buttonText} > Delete </Text>
      </TouchableOpacity>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>
          Open Me 
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row'
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#1a759f",
    paddingHorizontal: 8,
    paddingVertical: 16
  },
  itemText:{
    fontSize:18,
    fontWeight:400,
  },
  button:{
    backgroundColor: theme.colorBlack,
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderRadius: 8
  },
  buttonText:{
    fontSize:18,
    fontWeight:400,
    color:theme.colorWhite,
    textTransform:"uppercase"
  }
});
