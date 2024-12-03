import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Logo from '@/components/Logo'
import FormInput from '@/components/FormInput';
import Button from '@/components/Button';
import { router } from 'expo-router';

export default function index() {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Logo />

      <FormInput value={text} onChangeText={setText} label='Username' />

      <FormInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        label='Password'
      />
      <Button onPress={() => { router.push("List") }} customTitle='https://thumb.ac-illust.com/21/2122110b3d521c8ec10030c1e48d599b_t.jpeg' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

});

