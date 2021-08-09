import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const MovieItem = props => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate('MovieDetail', {item: props.item});
      }}>
      <View style={styles.item}>
        <Image
          style={styles.poster}
          source={{
            uri: 'http://image.tmdb.org/t/p/w342/' + props.item.poster_path,
          }}
        />
        <Text
          style={{
            width: 171,
            fontFamily: 'Poppins-Regular',
            fontSize: 13,
          }}>
          {props.item.title}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    marginRight: 10,
  },
  poster: {
    width: 171,
    height: 255.5,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default MovieItem;
