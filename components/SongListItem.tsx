import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { TSong } from '../types';

export type TSongListItemProps = {
  song: TSong;
}

const SongListItem = ({ song }: TSongListItemProps) => {

  return (
    <View style={styles.container}>
      <Image style={styles.image}  source={{ uri: song.imageUri }} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{song.title}</Text>
        <Text style={styles.artist}>{song.artist}</Text>
      </View>
    </View>
  )
}

export default SongListItem

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10
  },
  detailsContainer: {
    justifyContent: 'space-around',
    margin: 10
  },
  image: {
    width: 75,
    height: 75,
  },
  title: {
    color: '#fff',
    fontSize: 18
  },
  artist: {
    color: '#999'
  }
})