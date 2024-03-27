import { useState } from 'react';
import { View, Text, ImageStyle, StyleProp, Animated, ActivityIndicator } from 'react-native';
import { useAnimation } from '../../hooks/useAnimation';




interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>;
   
} 

export const FadeInImage = ( { uri, style }: Props ) => {

const { animatedOpacity, fadeIn } = useAnimation();
const [isLoading, setIsLoading] = useState(true);

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }} >
        
        {
            isLoading && ( /* Si esta en true aparece el señalador de carga. */
                <ActivityIndicator
                style={{ position: 'absolute'}}
                color= "grey"
                size={ 30 }
                />

            )
        }


        <Animated.Image 
        source={ { uri } }
        /* como disparar el FadeIn? cuando se termina de cargar la imagen. para eso tenemos otra property u otro atributo que es el : onLoadEnd: */
        onLoadEnd={ ()=> {
            fadeIn({ /* duration: 300 */});
            setIsLoading(false);
        }}
        style={[ style, {opacity: animatedOpacity} ]}
        />
        
        <Text>
     
        </Text>
    </View>
  )
}

