import { Button, View, Text, Touchable, TouchableHighlight, TouchableOpacity } from 'react-native'
import React from 'react'
import { useActionSheet } from '@expo/react-native-action-sheet'
import { router } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
export default function Menu({ buttons }: { buttons: string[] }) {
  const { showActionSheetWithOptions } = useActionSheet();

  const onPress = () => {
    const options = buttons;
    const destructiveButtonIndex = 0;
    const cancelButtonIndex = 2;

    showActionSheetWithOptions({
      options,
      cancelButtonIndex,
      destructiveButtonIndex
    }, (selectedIndex) => {
      switch (selectedIndex) {

        case 1:
          router.replace('/About')
          break;

        case destructiveButtonIndex:
          if (router.canDismiss()) { router.dismissAll() }
          console.log("oi")
          router.replace('/')
          // Delete
          break;

        case cancelButtonIndex:
        // Canceled
      }
    });
  }

  return (
    <View>

      <TouchableOpacity onPress={onPress}>
        <FontAwesome name="bars" size={24} color="black" />
      </TouchableOpacity>
    </View>
    // <Button title='Ola' onPress={onPress} />
  )
}
