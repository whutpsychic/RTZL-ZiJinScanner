/**
 * @format
 */
//关闭黄色警告
console.disableYellowBox = true;
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
