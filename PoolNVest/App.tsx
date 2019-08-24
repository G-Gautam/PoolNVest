import Main from './components/Main';
import Chat from './components/Chat';
import createStackNavigator from 'react-navigation'

const navigator = createStackNavigator({
  Main: { screen: Main },
  Chat: { screen: Chat },
});

export default navigator