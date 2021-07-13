import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

function MovieItem(props) {
  return (
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
          fontFamily: 'poppins-r',
          fontSize: 13,
        }}>
        {props.item.title}
      </Text>
    </View>
  );
}

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
