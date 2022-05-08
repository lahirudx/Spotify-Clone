import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import albumDetails from '../data/albumDetails';
import SongListItem from '../components/SongListItem';
import AlbumMain from '../components/AlbumMain';

const AlbumScreen = () => {
  const route = useRoute();

  useEffect(() => {
    console.log({ route })
  }, [])
  
  return (
    <View>
      <FlatList
        data={albumDetails.songs}
        renderItem={({ item }) => <SongListItem song={item} />}
        keyExtractor={item => item.id}
        ListHeaderComponent={<AlbumMain album={albumDetails} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default AlbumScreen

const styles = StyleSheet.create({
  
})