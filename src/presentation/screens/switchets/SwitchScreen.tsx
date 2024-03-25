import React, { useState } from 'react'
import { Switch, Text, View } from 'react-native'
import { CustomView } from '../../components/ui/CustomView'
import { Card } from '../ui/Card';
import { CustomSwitch } from '../../components/ui/CustomSwitch';
import { Separator } from '../../components/ui/Separator';
//import { Card } from '../ui/Card'
//import { Button } from '../../components/Button'

export const SwitchScreen = () => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);


     // otra manera es la siguiente: 
    const [ state, setState ]= useState({
        isActive: true,
        isHungry: false,
        isHappy: true
    })
    
  return (
  <CustomView style = {{marginTop: 100, paddingHorizontal: 10 }}>

    <Card>

        <CustomSwitch
      /*   isOn = { isEnabled }
        onChange=  {()=> toggleSwitch() }
        text= 'Está encendido' */
        // otra manera es la siguiente: 

        isOn = { state.isActive }
        onChange=  {(value)=> setState({...state, isActive: value}) }
        text= 'Está activo?' 
        />

        <Separator/>

        <CustomSwitch
        isOn = { state.isHungry }
        onChange=  {(value)=> setState({...state, isHungry: value}) }
        text= 'Tiene hambre?' 
        />
        <Separator/>
        <CustomSwitch
        isOn = { state.isHappy }
        onChange=  {(value)=> setState({...state, isHappy: value}) }
        text= 'Es feliz?' 
        />

    </Card>


 {/*    <Card>

    <Button 
    text= "Click me "
    onPress={ ( )=> { }}
    />
    </Card> */}
    
    <Text>
        secciòn de switch screen
    </Text>

  </CustomView>
  )
}
