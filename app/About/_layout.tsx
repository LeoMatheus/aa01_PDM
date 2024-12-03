
import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import Menu from '@/components/MenuActionSheet'
export default function _layout() {
  return (


    <Stack >
      <Stack.Screen name='About' options={{ title: "Sobre", headerLeft: () => null, headerRight: () => <Menu /> }} />

    </Stack>
  )
}
