import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { TAlbum } from '../types';

type AlbumMainProps = {
  album: TAlbum;
};

const AlbumMain = ({}: AlbumMainProps) => {
  return (
    <View>
      <Text>AlbumMain</Text>
    </View>
  )
}

export default AlbumMain

const styles = StyleSheet.create({})