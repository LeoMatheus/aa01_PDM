import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { DEFAULT_RADIUS } from '@/constants/globalStyles'

type CheckoutButtonProps = {
  onPress: () => void;
  customTitle?: string;
}
export default function Button(
  {
    onPress,
    customTitle = " https://files.oaiusercontent.com/file-LMmhdvMyTxWs7qikBJkBGn?se=2024-11-27T19%3A49%3A41Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dfdcde7e9-2edf-4524-8af2-0bd139e69b46.webp&sig=jHLOLkGeKGuqWL/Y0oCx%2B0e/SZesQUy5y06TYngcdc4%3D ",
  }: CheckoutButtonProps
) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image style={styles.container} source={{ uri: customTitle }} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {

    width: 160,
    height: 80,
  },
});

