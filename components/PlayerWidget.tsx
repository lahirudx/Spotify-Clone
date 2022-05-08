import { StyleSheet, Text, View, Image } from 'react-native'
import { TSong } from '../types';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

import React from 'react'

const song = {
  id: '1',
  imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
  title: 'High on You',
  artist: 'Helen',
};

const PlayerWidget = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainRow}>
        <Image style={styles.image} source={{ uri: song.imageUri }} />
        <View style={styles.rightContainer}>
          <View style={styles.detailsContainer}>
            <Text style={styles.title}>{song.title}</Text>
            <View style={styles.dotContainer}>
              <View style={styles.dot} />
            </View>
            <Text style={styles.artist}>{song.artist}</Text>
          </View>
          <View style={styles.iconContainer}>
            <AntDesign style={styles.icon} size={25} color='#ccc' name='hearto' />
            <FontAwesome style={styles.icon} name='play' size={25} color='#ccc' />
          </View>
        </View>
      </View>
    </View>
  )
}

export default PlayerWidget

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 79,
    backgroundColor: '#131313',
    width: '100%',
    borderBottomWidth: 3,
    borderBottomColor: '#010101',
    alignItems: 'center',
  },
  mainRow: {
    flexDirection: 'row',
  },
  detailsContainer: {
    alignItems: 'center',
    margin: 10,
    flexDirection: 'row',
    flex: 1,
  },
  image: {
    width: 60,
    height: 60,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    marginRight: 10,
  },
  artist: {
    color: '#999'
  },
  dot: {
    backgroundColor: '#ccc',
    width: 5,
    height: 5,
    borderRadius: 5,
    marginRight: 5,
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dotContainer: {
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10
  },
  icon: {
    marginHorizontal: 10
  },
})