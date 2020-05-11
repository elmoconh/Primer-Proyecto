/* eslint-disable prettier/prettier */
import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Button from './Button';
export default function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize: 20}}>Inicio</Text>
      <Button nombre ='Ir a perfil' destino = 'Perfil'/>
    </View>
  );
}