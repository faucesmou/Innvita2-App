import React, { PropsWithChildren } from 'react'
import { StyleProp, Text, View, ViewStyle } from 'react-native'
import { CustomView } from '../../components/ui/CustomView'
import { colors } from '../../../config/theme/theme'

/* esta manera de usar extends es otra alternativa de como configurar interface: */
interface Props extends PropsWithChildren {
    style?: StyleProp<ViewStyle>;

}


export const Card = ({style, children}: Props ) => {
  return (
  <View style={ [ 
    {
     backgroundColor: colors.cardBackground,
     borderRadius: 10,
     padding:10   
    },
    style,
  ]}>
{ children }

  </View>
  )
}
