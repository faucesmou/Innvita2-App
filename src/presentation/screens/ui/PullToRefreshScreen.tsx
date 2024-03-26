
import { Title } from '../../components/ui/Title'
import { CustomView } from '../../components/ui/CustomView'
import { ScrollView } from 'react-native-gesture-handler'
import { RefreshControl } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useState } from 'react'
import { colors, globalStyles } from '../../../config/theme/theme'





export const PullToRefreshScreen = () => {

const [isRefreshing, setisRefreshing] = useState(false)

const { top } = useSafeAreaInsets()

const onRefresh = () => {

    setisRefreshing( true );

    setTimeout(() => {
        setisRefreshing( false )
    }, 5000);

}


    return (

        <ScrollView
        refreshControl={ 
        <RefreshControl 
        refreshing={ isRefreshing }
        progressViewOffset={ top  }
        colors={[ colors.primary, 'red', 'orange', 'green']}
        onRefresh={ onRefresh  }
        style={ {marginBottom: 40} }
        /> }
        style={ [ globalStyles.mainContainer, globalStyles.globalMargin]}
        >

         <Title text="Pull To Refresh Screen" safe />


        </ScrollView>
    )
}