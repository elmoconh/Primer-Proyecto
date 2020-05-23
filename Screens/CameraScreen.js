/* eslint-disable prettier/prettier */
import React from 'react';
import { WebView } from 'react-native-webview';

//const myHtmlFile = require("./html/index.html");


 export default function CameraScreen() {
    return (
  <WebView
        source={{uri: 'https://corona-cd286.firebaseapp.com'}}
            />
    );
  }
