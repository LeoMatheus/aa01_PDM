import { View, Text, SectionList, StyleSheet, Image } from 'react-native';
import React from 'react';

import data from '../../services/data-passengers';
import { Stack } from 'expo-router';
import Menu from '@/components/MenuActionSheet';
import Logo from '@/components/Logo';

export default function List() {
  // ... (rest of the code remains the same)
  const groupedData = data.reduce((acc: any, passenger) => {

    const { origin, destination } = passenger;

    acc[origin] = acc[origin] || [];

    acc[origin].push(passenger);



    acc[destination] = acc[destination] || [];

    acc[destination].push(passenger);

    return acc;

  }, {});

  const sectionListData = Object.keys(groupedData).map(country => ({

    title: country,

    data: groupedData[country],

  }));

  sectionListData.sort((a, b) => {

    return a.title.localeCompare(b.title)

  });
  return (
    <View style={styles.container}>
      <Logo />
      <SectionList
        sections={sectionListData}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.passenger_avatar }} style={styles.avatar} />
            <View style={styles.itemDetails}>
              <Text style={styles.name}>{item.passenger_name}</Text>
              <Text style={styles.info}>Origin: {item.origin}</Text>
              <Text style={styles.info}>Destination: {item.destination}</Text>
            </View>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
        style={styles.sectionList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  sectionList: {
    marginTop: 20,
  },
  sectionHeader: {
    backgroundColor: '#fff',
    padding: 15,
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  itemDetails: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  info: {
    fontSize: 14,
    color: '#888',
  },
});
