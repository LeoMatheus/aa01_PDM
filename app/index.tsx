import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Logo from '@/components/Logo';
import FormInput from '@/components/FormInput';
import Button from '@/components/Button';
import { router } from 'expo-router'; // Assuming this is navigation for Expo

export default function Login() { // Use a descriptive component name
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State for error message

  const handleLogin = () => {
    if (username === 'usuario' && password === '123') {
      setErrorMessage(''); // Clear any previous error message
      router.replace("/List");
    } else {
      setErrorMessage('Invalid username or password. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Logo />

      <FormInput
        value={username}
        onChangeText={setUsername}
        label='Username'
      />

      <FormInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        label='Password'
      />

      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}

      <Button onPress={handleLogin} customTitle='https://thumb.ac-illust.com/21/2122110b3d521c8ec10030c1e48d599b_t.jpeg' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});
