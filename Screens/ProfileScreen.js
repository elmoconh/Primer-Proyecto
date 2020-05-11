/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Button from './Button'
export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pantalla Perfil</Text>
          <Button nombre ='Ir a inicio' destino = 'Inicio'/>
    </View>
  );
}
