import React, {useEffect} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import ChipGroup from '../components/ChipGroup';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';
import {getTrailer} from '../redux/actions';

const MovieDetail = ({
  navigation,
  route,
  genres: {genres = []} = {},
  trailer,
  getTrailer,
}) => {
  useEffect(() => {
    getTrailer(route.params.item.id);
  }, []);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.pop();
        }}>
        <MaterialCommunityIcons
          style={{
            position: 'absolute',
            top: 20,
            left: 10,
            zIndex: 1,
            paddingRight: 20,
            paddingBottom: 20,
          }}
          name="chevron-left"
          size={24}
          // color={isDarkMode ? light.bg : dark.bg}
        />
      </TouchableWithoutFeedback>
      <Image
        style={styles.poster}
        resizeMode={'cover'}
        source={{
          uri:
            'http://image.tmdb.org/t/p/w500/' + route.params.item.backdrop_path,
        }}
      />
      <View style={styles.itemMargin}>
        <View style={styles.itemRow}>
          <Text style={styles.title}> {route.params.item.title}</Text>
          <View style={styles.ratingBadge}>
            <Text style={styles.rating}> {route.params.item.vote_average}</Text>
          </View>
        </View>
        <View style={styles.itemGroup}>
          {route.params.item.genre_ids.map(genre => {
            return genres.map(element => {
              if (genre == element.id) {
                return (
                  <ChipGroup key={element.id} name={element.name}></ChipGroup>
                );
              }
            });
          })}
        </View>
        <Text> {route.params.item.release_date}</Text>
        <Text style={styles.title}> Overview </Text>
        <Text> {route.params.item.overview}</Text>
        <Text style={styles.title}> Teasers & Trailers </Text>
        <Text>{trailer?.backdrop_path}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  rating: {
    fontFamily: 'poppins-sb',
    marginTop: 4,
  },
  ratingBadge: {
    backgroundColor: 'grey',
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'poppins-l',
  },
  poster: {
    height: 240,
  },
  posterSpace: {
    height: 210,
  },
  title: {
    fontSize: 20,
    fontFamily: 'poppins-r',
    fontWeight: 'bold',
  },
  header: {
    fontSize: 20,
    fontFamily: 'poppins-sb',
    marginTop: 10,
  },
  itemGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemMargin: {
    margin: 10,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
const mapStateToProps = state => {
  return {
    genres: state.genres.genres,
    trailer: state.trailer.trailer,
  };
};
export default connect(mapStateToProps, {getTrailer})(MovieDetail);
