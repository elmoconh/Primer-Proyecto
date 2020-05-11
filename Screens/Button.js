/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import * as RootNavigation from './RootNavigation'

/*export default function Button({props}) {
    return(
    <TouchableOpacity style={{width: 200, height: 50, backgroundColor: '#ff5204', padding: 10, alignItems: 'center', borderRadius: 5}} 
    onPress={()=>props.navigation.navigate('Perfil')}>
       <Text style={{ fontSize: 20, color: '#fff'}}> Perfil </Text>
      </TouchableOpacity>
    );
}*/

export default function Button({destino, nombre}) {
    return(
    <TouchableOpacity style={{width: 200, height: 50, backgroundColor: '#ff5204', padding: 10, alignItems: 'center', borderRadius: 5}} 
    onPress={()=>RootNavigation.navigate(destino)}>
       <Text style={{ fontSize: 20, color: '#fff'}}> {nombre} </Text>
      </TouchableOpacity>
    );
}