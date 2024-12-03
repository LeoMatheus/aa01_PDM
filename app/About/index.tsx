import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Logo from '@/components/Logo'; // Assuming Logo component is imported correctly

export default function About() {
  return (
    <View style={styles.container}>
      <Logo />

      <View style={styles.infoContainer}>
        <Text style={styles.version}>version 1.0</Text>
        <Text style={styles.developedBy}>developed by</Text>
        <Text style={styles.developerName}>Leo Matheus Raifur</Text>
        <Text style={styles.githubLink}>https://github.com/LeoMatheus</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Make the container take up the entire available space
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    paddingHorizontal: 20, // Add horizontal padding for better spacing
    backgroundColor: '#f5f5f5', // Light background color
  },
  infoContainer: {
    marginTop: 20, // Add some margin between the logo and info
    alignItems: 'center', // Align info items vertically
  },
  version: {
    fontSize: 18, // Increase version text size
    fontWeight: 'bold', // Make version text bold
    marginBottom: 5, // Add some margin below
  },
  developedBy: {
    fontStyle: 'italic', // Italicize "developed by" for emphasis
    marginBottom: 5,
  },
  developerName: {
    fontSize: 16, // Set developer name text size
    fontWeight: 'bold', // Make developer name bold
    marginBottom: 5,
  },
  githubLink: {
    color: '#007bff', // Blue color for the GitHub link
    textDecorationLine: 'underline', // Underline the link
  },
});
