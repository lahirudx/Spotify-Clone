import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { TAlbum } from '../types';

export type AlbumProps = {
  album: TAlbum;
}

const Album = (props: AlbumProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: props.album.imageUri}} />
      <Text style={styles.text}>{props.album.artistsHeadline}</Text>
    </View>
  )
}

export default Album

const styles = StyleSheet.create({
  container: {
    width: 155,
    margin: 10,
  },
  image: {
    width: '100%',
    height: 155,
  },
  text: {
    color: 'grey',
    marginTop: 15,
  }
})