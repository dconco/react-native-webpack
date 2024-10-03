import { AppRegistry } from 'react-native'
import App from './App'

// Register the app for the web platform
AppRegistry.registerComponent('MyApp', () => App)

AppRegistry.runApplication('MyApp', {
	rootTag:
		document.getElementById('root') || document.getElementById('app-root')
})
