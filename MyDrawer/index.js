/* eslint-disable prettier/prettier */
// In App.js in a new project
//Importando Librerías
import * as React from 'react';
import { View, Text, TouchableOpacity, Image, Platform } from 'react-native';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItemList  } from '@react-navigation/drawer';
import Icon from "react-native-vector-icons/FontAwesome"

//importando otros archivos javascript
import s from './Styles';
import {navigationRef}  from '../Screens/RootNavigation';
import HomeScreen       from '../Screens/HomeScreen';
import ProfileScreen    from '../Screens/ProfileScreen';
import CameraScreen     from'../Screens/CameraScreen';


function DrawerMenu(props){
    return(
        <TouchableOpacity onPress={props.navigation}>
            <View style={s.menuContainer}>
                <View style={s.iconoContainer}>
                    <Icon size={17} name={props.iconName}/>
                </View>
                <View style={s.tituloContainer}>
                    <Text style={s.tituloTxt}>{props.titleName}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

function Menu(props){
    return( 
        <View style={s.container}> 
           <View style={s.bgContainer}>
              <TouchableOpacity>
                  <View style={s.userContainer}>
                      <Image source={require('./imagen1.jpg')}  style={{ width: 200, height: 200 }}/>
                  </View>
                <View style={s.userNombre}>
                  <Text style={s.userTitulo}>Helmer Morales </Text>
                  <Text style = {s.userSubTitulo}>Ing en Informática</Text>
                </View>

              </TouchableOpacity>
          </View>
                  <DrawerMenu iconName= 'home' titleName ='Inicio' navigation={ ()=>props.navigation.navigate('Inicio')}/>
                  <DrawerMenu iconName= 'user' titleName ='Perfil' navigation={ ()=>props.navigation.navigate('Perfil')}/>
                  <DrawerMenu iconName= 'map' titleName ='Camara' navigation={ ()=>props.navigation.navigate('Camara')}/>

        </View>
    );
 }

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer ref = {navigationRef}>
      <Drawer.Navigator drawerContent={(props)=> <Menu {...props}/>}>
        <Drawer.Screen name="Inicio" component={HomeScreen} />
        <Drawer.Screen name="Perfil" component={ProfileScreen} />
        <Drawer.Screen name="Camara" component={CameraScreen} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;