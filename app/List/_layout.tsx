import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import Menu from '@/components/MenuActionSheet'
export default function _layout() {
  return (


    <Stack >
      <Stack.Screen name='List' options={{ title: "Asas de Papelao", headerLeft: () => null, headerRight: () => <Menu /> }} />

    </Stack>
  )
}
