import React, {useEffect} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
} from 'react-native';
import {connect} from 'react-redux';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  getMovies,
  getGenres,
  getTrailer,
  getRecentMovies,
} from '../redux/actions';
import MovieItem from '../components/MovieItem';
import RecentMovieItem from '../components/RecentMovieItem';
import recentMovies from '../redux/reducer/recentMovies';

RecentMovieItem;
const Home = ({
  movies: {results = []} = {},
  genres,
  recentMovies,
  isLoading,
  getMovies,
  getGenres,
  getRecentMovies,
}) => {
  useEffect(() => {
    getGenres();
    getMovies();
    getRecentMovies();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.title}>Movie Catch</Text>
        <MaterialCommunityIcons name="magnify" size={28} />
      </View>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
            marginVertical: 15,
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
            }}>
            Popular Movies
          </Text>
          <TouchableWithoutFeedback
            onPress={() =>
              this.props.navigation.navigate('ViewAll', {
                genres: this.genres,
                isPopular: true,
              })
            }>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                }}>
                Vew All
              </Text>
              <MaterialCommunityIcons
                name="chevron-right"
                size={20}
                color={'black'}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{flexDirection: 'row', flex: 1, paddingLeft: 20}}>
            {isLoading ? (
              <Text>loading</Text>
            ) : (
              results?.map(item => <MovieItem key={item.id} item={item} />)
            )}
          </View>
        </ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
            marginVertical: 15,
          }}>
          <Text
            style={{
              fontFamily: 'poppins-r',
            }}>
            Recent Movies
          </Text>
          <TouchableWithoutFeedback
            onPress={() =>
              this.props.navigation.navigate('ViewAll', {
                genres: this.genres,
                isPopular: false,
              })
            }>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                }}>
                View All
              </Text>
              <MaterialCommunityIcons name="chevron-right" size={20} />
            </View>
          </TouchableWithoutFeedback>
        </View>

        <View style={{flexDirection: 'column', flex: 1, paddingLeft: 20}}>
          {recentMovies?.results?.map((item, index) => {
            return index < 5 ? (
              <RecentMovieItem key={item.id} item={item} genres={this.genres} />
            ) : (
              <View key={item.id} />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: getStatusBarHeight + 10,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    zIndex: 3,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Poppins-Regular',
  },
  rectangle: {
    height: 40,
  },
});

const mapStateToProps = state => {
  return {
    movies: state.movies.movies,
    isLoading: state.movies.isLoading,
    genres: state.genres.genres,
    recentMovies: state.recentMovies.recentMovies,
  };
};

export default connect(mapStateToProps, {
  getGenres,
  getMovies,
  getRecentMovies,
})(Home);
