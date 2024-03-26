import React, { useState } from 'react'
import { Text, View, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { CustomView } from '../../components/ui/CustomView'
import { Title } from '../../components/ui/Title'
import { globalStyles } from '../../../config/theme/theme'
import { Card } from '../ui/Card'


export const TextInputScreen = () => {

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  })

  return (

    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined }
      keyboardVerticalOffset={120} 
      >


      <ScrollView>

        <CustomView margin >
          <Title text="Text inputs" safe />

          <Card>
            <TextInput
              style={globalStyles.input}
              placeholder='Nombre completo'
              autoCapitalize={'words'}
              autoCorrect={false}
              onChangeText={value => setForm({ ...form, name: value })}
            />
            <TextInput
              style={globalStyles.input}
              placeholder='Email'
              autoCapitalize={'none'}
              autoCorrect={false}
              keyboardType='email-address'
              onChangeText={value => setForm({ ...form, email: value })}
            />
            <TextInput
              style={globalStyles.input}
              placeholder='Teléfono'
              keyboardType='phone-pad'
              onChangeText={value => setForm({ ...form, phone: value })}
            />

          </Card>
          <View style={{ height: 20 }} />

          <Card>
            <Text> {JSON.stringify(form, null, 2)}</Text>
            <Text> {JSON.stringify(form, null, 2)}</Text>
            <Text> {JSON.stringify(form, null, 2)}</Text>
            <Text> {JSON.stringify(form, null, 2)}</Text>
            <Text> {JSON.stringify(form, null, 2)}</Text>
            <Text> {JSON.stringify(form, null, 2)}</Text>
            <Text> {JSON.stringify(form, null, 2)}</Text>
            <Text> {JSON.stringify(form, null, 2)}</Text>
            <Text> {JSON.stringify(form, null, 2)}</Text>
            <Text> {JSON.stringify(form, null, 2)}</Text>
            <Text> {JSON.stringify(form, null, 2)}</Text>
            <Text> {JSON.stringify(form, null, 2)}</Text>
            <Text> {JSON.stringify(form, null, 2)}</Text>
          </Card>

          <Card>
            <TextInput
              style={globalStyles.input}
              placeholder='Teléfono'
              keyboardType='phone-pad'
              onChangeText={value => setForm({ ...form, phone: value })}
            />
          </Card>

        </CustomView>

        <View style={{ height: 20}}/>

      </ScrollView>

    </KeyboardAvoidingView>
  )

}