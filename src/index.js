import { AppRegistry } from 'react-native';
import App from './App';

AppRegistry.registerComponent('SimpleCalculator', () => App);

AppRegistry.runApplication("App", {
  rootTag: document.getElementById("root")
});
