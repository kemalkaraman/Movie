import React, {useEffect} from 'react';
import {Text, View, ScrollView, StyleSheet, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {getMovies, getGenres, getTrailer} from '../redux/actions';
import MovieItem from '../components/MovieItem';

const Home = ({
  movies: {results = []} = {},
  isLoading,
  getMovies,
  getGenres,
}) => {
  useEffect(() => {
    getGenres();
    getMovies();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.title}>Movie Catch</Text>
        <MaterialCommunityIcons name="magnify" size={28} />
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection: 'row', flex: 1, paddingLeft: 20}}>
          {isLoading ? (
            <Text>loading</Text>
          ) : (
            results?.map(item => <MovieItem key={item.id} item={item} />)
            // genres?.map(item => <Text key={item.id}>{item.name}</Text>)
          )}
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
    fontFamily: 'poppins-sb',
  },
  rectangle: {
    height: 40,
  },
});

const mapStateToProps = state => {
  return {
    movies: state.movies.movies,
    isLoading: state.movies.isLoading,
  };
};

export default connect(mapStateToProps, {getMovies, getGenres})(Home);
