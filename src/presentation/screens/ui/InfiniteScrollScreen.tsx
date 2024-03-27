import React, { useState } from 'react'
import { ActivityIndicator, Image, Text, View } from 'react-native'
import { colors } from '../../../config/theme/theme'
import { CustomView } from '../../components/ui/CustomView'
import { Title } from '../../components/ui/Title'
import { FlatList } from 'react-native-gesture-handler'
import { FadeInImage } from '../../components/ui/FadeInImage'

export const InfiniteScrollScreen = () => {

    const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8])

    const loadMore = () => {
        console.log('loading more...');
        const newArray = Array.from({ length: 5 }, (_, i) => numbers.length + i);
        /* si queremos que la carga no sea instantánea o síncrona podemos añadir lo siguiente:  */
        setTimeout(() => {
            //Todo: añadir números a nuestro arreglo.
            setNumbers([...numbers, ...newArray]);
        }, 1000 /* si agregamos timing retrasa la carga. */)
    }


    return (
        <View style={{ backgroundColor: 'black' }}>

            <Title text='Productos Al infinito ' safe white />

            <FlatList
                data={numbers}
                onEndReached={loadMore}
                onEndReachedThreshold={0.2}
                keyExtractor={(item) => item.toString()}

                renderItem={({ item }) => <ListItem number={item} />}

                /* Si llega hasta el final renderizamos un view con el indicador de carga: */
                ListFooterComponent={() => (
                    <View style={{ height: 150, justifyContent: 'center', marginBottom: 90 }}>
                        <ActivityIndicator size={40} color={colors.primary} />
                    </View>
                )}
            /*  una manera previa más sencilla es esta: 
            renderItem={ ({ item } )=> <Text style={ { height: 300, backgroundColor: colors.primary, color: 'white', fontSize:50 } }>{ item }</Text> } */

            />

        </View>
    )
};

interface ListItemProps {
    number: number;
}

const ListItem = ({ number }: ListItemProps) => {
    return (

        <FadeInImage 
        uri= {`https://picsum.photos/id/${number}/500/400`}
        style= {{
            height: 400,
            width: '100%'
        }}
        />
       /*  <Image
            source={{ uri: `https://picsum.photos/id/${number}/500/400` }}
            style={{
                height: 400,
                width: '100%'
            }}
        /> */
    )

}




{/* Se recomienda FlatList porque va renderizando perezosamente los elementos en vez de cargar todos como el scrollView. Si se cargara en twitter todos los elementos al mismo tiempo sería por ejemplo muy pesado para el dispositivo. */ }

/*  <FlatList
data={ numbers } A continuación importante funcionalidad de FlatList para cargar una función cuando se llega al final de la lista: onEndReached */

/*  onEndReached={ loadMore }: Para cargar elementos antes de llegar al final y evitar que el usuario tenga que volver a deslizar y esperar para que aparezcan se usa este PROPERTY: onEndReachedThreshold: */
/*  onEndReachedThreshold={ 0.4 }  : el 0 es el incio y el 1 el final por eso lo colocamos en un intermedio para que se cargue en ese punto. */
/* Cuando usamos uno de estos elementos (FlatList) y estos elementos cambian de posiciones es conveniente colocar un keyExtractor */