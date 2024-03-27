import { Modal, Platform, Text, View } from 'react-native'
import { CustomView } from '../../components/ui/CustomView'
import { Title } from '../../components/ui/Title'
import { Button } from '../../components/Button'
import { useState } from 'react'


export const ModalScreen = () => {

    const [isVisible, setisVisible] = useState(false);

    return (
        <CustomView margin >

            <Title text='Modal' safe />


            <Button
                text='Abrir Modal'
                onPress={() => setisVisible(true)}
               
            />

            <Modal
                visible={isVisible}
                animationType='slide'/* también esta 'slide' */
            >

                <View style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,0.1)'
                        }} >
                    <View style={{ paddingHorizontal: 10, marginTop: 50 }} >
                        <Title text='Modal content' safe  />
                    </View>
                    <View style={{ flex: 1 }} />

                <Button 
                text='Cerrar modal perro'
                onPress={ () => setisVisible(false) }
                styles={{ height: Platform.OS === 'android' ? 40 : 60,
                borderRadius: 0,
            marginBottom:5}}
                />

            {/*     <Button 
                text='cerrar modal 2 perro'
                onPress={ () => setisVisible(false) }
                styles={{ paddingHorizontal: 10, marginTop: 40 }}
                /> */}

                </View>

            </Modal>

        </CustomView>
    )
}
