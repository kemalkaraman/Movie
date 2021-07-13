import React from 'react';
import {Text, View, ScrollView, StyleSheet, SafeAreaView} from 'react-native';
import {useEffect} from 'react';
import MovieItem from '../components/MoviItem';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {connect} from 'react-redux';
import {getMovies} from '../redux/actions/index';

const Home = props => {
  useEffect(() => {
    props.getMovies();
  }, []);
  console.log(props.movies);
  console.log(props.message);
  console.log(props.isLoading);

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.title}>Movie Catch</Text>
        <MaterialCommunityIcons name="magnify" size={28} />
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection: 'row', flex: 1, paddingLeft: 20}}>
          {props.movies.results.map(item => (
            <MovieItem key={item.id} item={item} />
          ))}
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
    movies: state.movies,
    isLoading: state.isLoading,
  };
};

export default connect(mapStateToProps, {getMovies})(Home);
