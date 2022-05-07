import { FlatList, StyleSheet, Text, View } from 'react-native';

import { RootTabScreenProps } from '../types';

import AlbumCategory from '../components/AlbumCategory';

import albumCategories from '../data/albumCategories';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      <FlatList
        data={albumCategories}
        renderItem={({item}) => <AlbumCategory albumCategory={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
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
