import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { RootStackParamList, TAlbum } from '../types';
import { useNavigation } from '@react-navigation/native';

export type AlbumProps = {
  album: TAlbum;
}

const Album = (props: AlbumProps) => {

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Root',
      {
        screen: 'Home',
        params: {
          screen: 'Album',
          params: {
            id: props.album.id
          }
        }
      }
    );
  }

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: props.album.imageUri }} />
        <Text style={styles.text}>{props.album.artistsHeadline}</Text>
      </View>
    </TouchableWithoutFeedback>
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