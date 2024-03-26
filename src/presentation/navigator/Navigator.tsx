import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { Animation101Screen } from '../screens/animations/Animation101Screen';
import { Animation102Screen } from '../screens/animations/Animation102Screen';
import { SwitchScreen } from '../screens/switchets/SwitchScreen';
import { AlertScreen } from '../screens/alerts/AlertScreen';
import { TextInputScreen } from '../screens/inputs/TextInputScreen';
import { PullToRefreshScreen } from '../screens/ui/PullToRefreshScreen';
import { CustomSectionListScreen } from '../screens/ui/CustomSectionListScreen';
import { ModalScreen } from '../screens/ui/ModalScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={ HomeScreen } />
      <Stack.Screen name="Animation101Screen" component={ Animation101Screen } />
      <Stack.Screen name="Animation102Screen" component={ Animation102Screen } />

      <Stack.Screen name="SwitchScreen" component={ SwitchScreen } />
      <Stack.Screen name="AlertScreen" component={ AlertScreen } />

      <Stack.Screen name="TextInputScreen" component={ TextInputScreen } />
      <Stack.Screen name="PullToRefreshScreen" component={ PullToRefreshScreen } />

      <Stack.Screen name="CustomSectionListScreen" component={ CustomSectionListScreen } />
      <Stack.Screen name="ModalScreen" component={ ModalScreen } />

    </Stack.Navigator>
  );
}