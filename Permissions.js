/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import {check,RESULTS, PERMISSIONS, request} from 'react-native-permissions';
import { View, Text, TouchableOpacity, Image, Platform } from 'react-native';

const PLATFORM_CAMERA ={
  ios: PERMISSIONS.IOS.CAMERA,
  android: PERMISSIONS.ANDROID.CAMERA
}

const REQUEST_PERMISSION={
  camera: PLATFORM_CAMERA
}

const PERMISSION_TYPE={
  camera: 'camera'
}

class AppPermission{
  checkPermission = async(type): Promise<boolean>=>{
      const permissions = REQUEST_PERMISSION[type][Platform.OS];
      if(!permissions){
        return true;
      } 
      try {
        const result = await check(permissions);
          if (result == RESULTS.GRANTED) return true; 
            return this.requestPermission(permissions)
      }catch(error){
        return false;
      }
  }


  requestPermission = async(permissions) : Promise<boolean>=> {
    try{
        const result = await request(permissions);
        return result == RESULTS.GRANTED;
    }catch(error){
        return false;
    }
  }

}

const Permission = new AppPermission()
export {Permission, PERMISSION_TYPE}
