/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import home from './src/home.js'
import LinearLayout from './src/Layout.js'

AppRegistry.registerComponent(appName, () => LinearLayout);
