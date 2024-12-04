import { View, Text } from 'react-native'
import React from 'react'
import { ActionSheetProvider } from '@expo/react-native-action-sheet'
import { Stack } from 'expo-router'
import Menu from '@/components/MenuActionSheet'

export default function _layout() {
  return (
    <ActionSheetProvider>
      <Stack >
        <Stack.Screen name="index" options={{ headerShown: false }} />

        <Stack.Screen name='List/index' options={{ title: "Lista", headerLeft: () => null, headerRight: () => <Menu buttons={["Logout", "About"]} /> }} />
        <Stack.Screen name='About/index' options={{ title: "Sobre", headerLeft: () => null, headerRight: () => <Menu buttons={["Logout"]} /> }} />
      </Stack>
    </ActionSheetProvider>
  )
}
