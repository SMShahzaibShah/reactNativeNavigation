// In App.js in a new project
import React  from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


  const startScreen =({navigation , route})=> {
    const id = route.params.id;
    const name = route.params.name;
    return(
      <View style={styles.container}>
      <Text>Screen 1</Text>
    <Text>ID: {id}</Text>
    <Button title="Get New ID"
      onPress={()=>navigation.setParams(
        {id: Math.floor(Math.random()*100)}
      )}
    />
    <Text>Name:{name}</Text>
      <Text>Welcome to My App</Text>
      <Button title="Go to Dashboard"
        onPress={()=> navigation.navigate('Dashboard') }/>
    </View>
  );
  }

  const DashboardScrren=({navigation})=>{
    return(
      <View style={styles.container}>
    <Text>Screen 2</Text>
    <Text>Dashboard</Text>
    <Button title="Back"
      onPress={()=> navigation.goBack()}/>
      <Button title="Go to Home Screen"
        onPress={()=> navigation.popToTop() }/>
    </View>
  );
  }

const HomeScreen=({navigation})=> {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title="Lets Start"
        onPress={()=>navigation.navigate('Start', {id: 12, name: "Shahzaib"})}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex: 1, alignItems: 'center', justifyContent: 'center' },
})

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Home"}
      screenOptions={
        {
          headerTitleAlign: "center",
          headerTintColor: 'black', // change header color
          headerStyle:{
          backgroundColor: 'lightblue',
          },
          headerRight: () => <Button title="Edit"></Button>
        }
      }
      >
        <Stack.Screen
        name="Start"
        component={startScreen}
        />
        <Stack.Screen name="Home" component={HomeScreen} 
        options={{
          title: 'Welcome',
          //headerShown: false,
          // headerTitleAlign: "center",
          // headerTintColor: 'black', // change header color
          // headerStyle:{
          //   backgroundColor: 'lightblue',
          // }
          headerRight: () => {}
        }}/>
        <Stack.Screen name="Dashboard" component={DashboardScrren} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;