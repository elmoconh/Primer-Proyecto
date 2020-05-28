/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';

import {Permission, PERMISSION_TYPE} from './Permissions'
import MyDrawer from './MyDrawer';

export default class App extends React.Component{
  componentDidMount(){
    Permission.checkPermission(PERMISSION_TYPE.camera)
  
  }
    render(){
  return (
    <MyDrawer/>

  );
  }
}