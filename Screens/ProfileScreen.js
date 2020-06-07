/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Button from './Button'
export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor:'#566573', padding: 10}}>
      <Image source ={require('../Screens/logo.png')} style= {{width: 200, height: 200}}/>
      <Text style={{fontSize:20, fontWeight: 'bold'}}>Nombre: Helmer Morales Aranda</Text>
      <Text style={{fontSize:20,fontWeight: 'bold'}}>Tipo de usuario: Jugador o visitante</Text>
          <Button nombre ='Ir a inicio' destino = 'Inicio'/>
          <Button nombre ='Abrir Camara' destino = 'Camara'/>
    </View>
  );
}
