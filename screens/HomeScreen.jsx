import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1, alignItems:"center", padding: 20, backgroundColor:"#fff", gap: 20}}>
      <TouchableOpacity style={{padding: 10, marginBottom: 5, borderBottomWidth: 1}} onPress={()=>navigation.navigate("Lesson1")}>
        <Text style={{fontSize:20, fontWeight: 'bold'}}>Lesson 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{padding: 10, marginBottom: 5, borderBottomWidth: 1}} onPress={()=>navigation.navigate("Lesson2")}>
        <Text style={{fontSize:20, fontWeight: 'bold'}}>Lesson 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{padding: 10, marginBottom: 5, borderBottomWidth: 1}} onPress={()=>navigation.navigate("Lesson3")}>
        <Text style={{fontSize:20, fontWeight: 'bold'}}>Lesson 3</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})