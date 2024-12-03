import { View, Text } from 'react-native'
import React from 'react'
import { ActionSheetProvider } from '@expo/react-native-action-sheet'
import { Stack } from 'expo-router'
import Menu from '@/components/MenuActionSheet'

export default function _layout() {
  return (
    <ActionSheetProvider>
      <Stack >
        <Stack.Screen name='/' options={{ headerShown: false }} />
        <Stack.Screen name='List' options={{ title: "Asas de Papelao", headerLeft: () => null, headerRight: () => <Menu /> }} />
        <Stack.Screen name='About' options={{ title: "Sobre", headerRight: () => <Menu /> }} />
      </Stack>
    </ActionSheetProvider>
  )
}
