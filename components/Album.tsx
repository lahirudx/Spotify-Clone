import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export type AlbumProps = {
  album: {
    id: string;
    imageUri: string;
    artistsHeadline: string;
  }
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
    width: 200
  },
  image: {
    width: '100%',
    height: 200,
  },
  text: {
    color: 'grey',
    marginTop: 10,
  }
})