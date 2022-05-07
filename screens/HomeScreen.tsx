import { StyleSheet, Text, View } from 'react-native';

import { RootTabScreenProps } from '../types';

import Album from '../components/Album';

const album = {
  id: '1',
      imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
      artistsHeadline: 'Taylor Swift, Kygo Objective C, Avicii'
}

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <Album album={album} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
