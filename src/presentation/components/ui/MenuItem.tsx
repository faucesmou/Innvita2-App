import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native';
import { colors } from '../../../config/theme/theme';
import  Icon  from 'react-native-vector-icons/Ionicons'

interface Props {
    name: string;
    icon: string;
    component: string;
    //todo
}


export const MenuItem = ( {name, icon, component }: Props ) => {
  return (
    <Pressable
    onPress ={ () => console.log('Click/tap' )}    
    >
        <View
        style={ { 
            ...styles.container,
            backgroundColor: colors.cardBackground,
          }}
        >
            <Icon name={ icon } size={ 25 } style={{ marginRight: 10}} color={ colors.primary }/>
        </View>

    </Pressable>
  )
}


const styles = StyleSheet.create({
    container:  {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
    }

})