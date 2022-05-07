import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TAlbum } from '../types';
import AlbumCard from './Album';
import Album from './Album';

export type AlbumCategoryProps = {
  albumCategory: {
    id: string;
    title: string;
    albums: TAlbum[],

  }
}

const AlbumCategory = (props: AlbumCategoryProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.albumCategory.title}</Text>
      <FlatList
        data={props.albumCategory.albums}
        renderItem={({ item }) => <Album album={item} />}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default AlbumCategory

const styles = StyleSheet.create({
  container: {
    margin: 10
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '800',
    margin: 10
  }
})