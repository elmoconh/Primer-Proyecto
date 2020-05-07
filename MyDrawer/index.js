/* eslint-disable prettier/prettier */
// In App.js in a new project

import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import s from './Styles';

function HomeScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize: 20}}>Home Screen</Text>
      <TouchableOpacity style={{width: 200, height: 50, backgroundColor: '#ff5204', padding: 10, alignItems: 'center', borderRadius: 5}} onPress={()=>props.navigation.navigate('Profile')}>
       <Text style={{ fontSize: 20, color: '#fff'}}> Perfil </Text>
      </TouchableOpacity>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pantalla Perfil</Text>
    </View>
  );
}

/*const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />        
      </Stack.Navigator>
    </NavigationContainer>
  );
}*/
function Menu(props){
    return( 
        <View style={s.container}> 
           <View style={s.bgContainer}>
              <TouchableOpacity>
                  <View style={s.userContainer}>
                         <Text> pasé por aquí </Text>
                      <Image source={require('./imagen1.jpg')}  style={{ width: 200, height: 200 }}/>
                  </View>
              </TouchableOpacity>
          </View>
        </View>
    );
 }

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props)=> <Menu {...props}/>}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;