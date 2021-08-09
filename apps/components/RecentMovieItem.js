import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';
const RecentMovieItem = (props, {genres: {genres = []} = {}}) => {
  const navigation = useNavigation();
  const deviceWidth = Dimensions.get('window').width;
  const _width = deviceWidth - 50 - 171;
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
        <View style={{marginLeft: 10, width: _width}}>
          <Text
            style={{
              width: 171,
              fontFamily: 'Poppins-Regular',
              fontSize: 13,
            }}>
            {props.item.title}
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Light',
              fontSize: 12,
            }}>
            {props.item.genre_ids.map(genre => {
              return props.genres.genres.map((element, index) => {
                if (genre == element.id) {
                  return (
                    <Text key={element.id}>
                      {element.name +
                        (index < props.item.genre_ids.length - 1 ? ', ' : '')}
                    </Text>
                  );
                }
              });
            })}
          </Text>
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            <MaterialCommunityIcons name="star" color={'#FE6D8E'} size={20} />
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                alignSelf: 'center',
              }}>
              {props.item.vote_average}
            </Text>
            <Text
              style={{
                fontSize: 10,
                fontFamily: 'Poppins-Light',
                alignSelf: 'flex-end',
              }}>
              {' '}
              / 10
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
const mapStateToProps = state => {
  return {
    genres: state.genres.genres,
  };
};
const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
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
export default connect(mapStateToProps)(RecentMovieItem);
