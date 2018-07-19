/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Main from './Main'
import List from './search'

AppRegistry.registerComponent(appName, () => Main);
