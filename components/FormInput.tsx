import { StyleSheet, View, Text, TextInput, TextInputProps } from 'react-native'
import React from 'react'

type FormInputProps = {
  label?: string;
  error?: string;
} & TextInputProps;

export default function FormInput({ label, error, ...rest }: FormInputProps) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}

      <TextInput style={styles.input} {...rest} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
    padding: 8,
    borderRadius: 8,
  },
  label: {
    color: "#0088A3",
    fontWeight: "bold",
  },
  error: {
    color: "red",
    fontSize: 12,
  },
  input: {
    width: 200,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    height: 48,
  },
});
