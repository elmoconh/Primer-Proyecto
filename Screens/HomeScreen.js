/* eslint-disable prettier/prettier */
import * as React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import Button from './Button';
export default function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor:'#566573', padding: 10}}>
    <Image source={require('./logo.png')} style={{height: 250, width: 150}} />
      <Text style={{fontSize: 20, color: '#fff'}}>Inicio</Text>
      <TextInput
        placeholder = 'username or e-mail'
        placeholderTextColor= 'rgba(255,255,255,0.7)'
        style={{
        backgroundColor:'rgba(255,255,255,0.2)', 
        height: 40,
        width: 250,
        marginBottom: 20,
        color: '#fff',
        paddingHorizontal: 20

        }}
      /> 
      <TextInput
        placeholder = 'password'
        placeholderTextColor= 'rgba(255,255,255,0.7)'
        style={{
        backgroundColor:'rgba(255,255,255,0.2)', 
        height: 40,
        width: 250,
        marginBottom: 20,
        color: '#fff',
        paddingHorizontal: 20

        }}
      />  
      <Button nombre ='Ir a perfil' destino = 'Perfil'/>
      <Button nombre ='Ir a Gps' destino = 'GPS'/>

    </View>
  );
}