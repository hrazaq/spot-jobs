import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TextInput, Button, Alert} from 'react-native';
import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions} from 'react-native/Libraries/NewAppScreen';
import useFectJobs from './useFetchJobs'

export default function App () {
  const {jobs, loading, error} = useFectJobs()

  return(
    <View>
      {loading &&  <Text>Loading... </Text>}
      {error && <Text>Error .Try to refresh.</Text>}
      <Text>{jobs.length}</Text>
    </View>
  )
}



const styles = StyleSheet.create({
  search_input:{
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    marginTop: 10,
    borderRadius: 30,
    paddingLeft: 20,
  },
  search_button:{
    backgroundColor: 'red'
  },
  sectionTitle: {
    fontSize: 30,
    color: Colors.black,
    textAlign: 'center',
    marginBottom: 30,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  location_Text:{
    fontSize: 20,
    top: 150,
    color: Colors.black,
    textAlign: 'center',
  },
  location_value:{
    fontSize: 15,
    top: 155,
    color: Colors.black,
    textAlign: 'center',
  }
 
 
});
