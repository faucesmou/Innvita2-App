import React, { useState } from 'react'
import { StyleSheet, Text, View, Switch, Platform  } from 'react-native'
import { colors } from '../../../config/theme/theme';

interface Props {
    isOn: boolean;
    text?: string;

    onChange: (value: boolean) => void;
}

export const CustomSwitch = ({isOn, text, onChange }: Props ) => {

    


    return (
      <View style= { styles.switchRow }>

        {
            text && ( <Text style={{ color: colors.text }}> {text} </Text> )
        }
      

      <Switch
        
        //trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={ Platform.OS === 'ios'? colors.buttonTextColor : ''}
        //thumbColor={isEnabled ? '#8316a4' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={ onChange }
        value={ isOn}
        /* onValueChange={toggleSwitch} */
        /* value={isEnabled} */
        
      />


      </View>
    )
  
}

const styles = StyleSheet.create({
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
    }
})