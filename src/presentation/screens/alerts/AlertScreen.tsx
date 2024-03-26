import React from 'react'
import { Alert, Text, View } from 'react-native'
import { CustomSwitch } from '../../components/ui/CustomSwitch'
import { CustomView } from '../../components/ui/CustomView'
import { Title } from '../../components/ui/Title'
import { globalStyles } from '../../../config/theme/theme'
import { Button } from '../../components/Button'

import prompt from 'react-native-prompt-android';
import { showPrompt } from '../../../config/adapters/prompt.adapter'

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

    /* usando el paquete de prompt importado al inicio + el adapter ( prompt.adapter.ts : esto se hace para evitar tener que cambiar la configuraciòjn de cada prompt o alert, cuando tengamos que cambiar alguna implementacion sencillamente modificamos la prompt.adapter.ts y el resto van a funcionar automáticamente. aquí el ejemplo: */
    const onshowPrompt = () => {

        showPrompt({
            title: 'Prueba de un título',
            subTitle: 'prueba de un subtítulo',
            buttons: [
                { text: 'ok', onPress: ()=> console.log('ok') }
            ],
            placeholder: 'placeholder pa'
        });
  

   
    };


    const onshowPrompt2 = () => {
/* usando el paquete de prompt importado al inicio : (puede que tengamos que actualizarlo. o usar otro paquete. existe la posibilidad de incluir un adapter. )*/
        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
             {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
             {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder'
            });

   
    }

    const onshowPrompt1 = () => {

        /* codigo nativo:  */

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
onPress={ onshowPrompt }
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
