import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import { TAlbum } from '../types';

type AlbumMainProps = {
  album: TAlbum;
};

const AlbumMain = ({ album }: AlbumMainProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: album.imageUri }} />
      <Text style={styles.title}>{album.name}</Text>
      <View style={styles.createrContainer}>
        <Text style={styles.subTitles}>By {album.by}</Text>
        <Text style={styles.subTitles}>{album.numberOfLikes} Likes</Text>
      </View>
      <TouchableOpacity style={styles.playButton}>
        <Text style={styles.playButtonText}>Play</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AlbumMain

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 20

  },
  image: {
    width: 175,
    height: 175,
    margin: 5
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
  },
  createrContainer: {
    flexDirection: 'row',
    margin: 5
  },
  subTitles: {
    color: '#bbb',
    margin: 5
  },
  playButton: {
    backgroundColor: '#1cd05b',
    borderRadius: 24,
    width: 150,
    height: 40,
    justifyContent: 'center',
  },
  playButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 18,
    textTransform: 'uppercase',
  }
})