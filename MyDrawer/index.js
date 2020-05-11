/* eslint-disable prettier/prettier */
// In App.js in a new project
//Importando componentes
import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItemList  } from '@react-navigation/drawer';
import Icon from "react-native-vector-icons/FontAwesome"

//importando otros archivos javascript
import s from './Styles';
import {navigationRef} from '../Screens/RootNavigation';
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen';


/*function HomeScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize: 20}}>Inicio</Text>
      <TouchableOpacity style={{width: 200, height: 50, backgroundColor: '#ff5204', padding: 10, alignItems: 'center', borderRadius: 5}} onPress={()=>props.navigation.navigate('Perfil')}>
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
                  <DrawerMenu iconName= 'user' titleName ='Inicio' navigation={ ()=>props.navigation.navigate('Perfil')}/>

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
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;