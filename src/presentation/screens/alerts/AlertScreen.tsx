import React from 'react'
import { Alert, Text, View } from 'react-native'
import { CustomSwitch } from '../../components/ui/CustomSwitch'
import { CustomView } from '../../components/ui/CustomView'
import { Title } from '../../components/ui/Title'
import { globalStyles } from '../../../config/theme/theme'
import { Button } from '../../components/Button'

export const AlertScreen = () => {




    const createTwoButtonAlert = () =>{ 
        
        
        Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ], {
        userInterfaceStyle: 'light' /* esto se puede poner 'dark' para que se vea oscuro */
    }
    )
}

  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
    ]);

    const showPropmt = () => {

        Alert.prompt(
            'correo electronico?',
            'texto texto texto lalalala',
            ( valor: string ) => console.log({ valor }),
            'secure-text',
            'defecto',
            'number-pad'
        );
    }




  return (

<CustomView style={ globalStyles.globalMargin }>

<Title safe text="Alertas"/>

<Button
text="Alerta -2 Botones"
onPress={ createTwoButtonAlert }
/>

<View style={ { height: 10 }}/>

<Button
text="Alerta -3 Botones"
onPress={ createThreeButtonAlert }
/>

<View style={ { height: 10 }}/>


<Button
text="Prompt- input "
onPress={ showPropmt }
/>

</CustomView>
  )
}


/* import React from 'react'
import { Text, View } from 'react-native'

export const AlertScreen = () => {
  return (

    
  <View>
    
          <Text>
       
          </Text>
 
        </View>
  )
} */
