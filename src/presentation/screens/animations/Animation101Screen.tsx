import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import { View } from 'react-native'
import { colors } from '../../../config/theme/theme'



export const Animation101Screen = () => {
  return (
<View style={ styles.container }>

    <View style={ [styles.purpleBox ]} />

        <Pressable 
        onPress={ () => console.log('fadeIn')} 
        style={{ marginTop: 10 }}
        >
            <Text>
                Fade In
            </Text>
        </Pressable>
        <Pressable 
        onPress={ () => console.log('fade out')}
        style={{ marginTop: 10 }}
        >
            <Text>
                Fade Out
            </Text>
        </Pressable>

  
    {/* <Text >Animation101Screen</Text> */}
</View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    purpleBox: {
        backgroundColor: colors.primary,
        width: 150,
        height:150,

    }
})
