import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
  Modal,
} from 'react-native';
import ChipGroup from '../components/ChipGroup';
import TrailerItems from '../components/TrailerItems';

import YoutubePlayer from 'react-native-youtube-iframe';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';
import {getTrailer} from '../redux/actions';

const MovieDetail = ({
  navigation,
  route,
  genres: {genres = []} = {},
  trailer: {results = []} = {},
  getTrailer,
}) => {
  useEffect(() => {
    getTrailer(route.params.item.id);
  }, []);
  const [modalVisible, setModalVisible] = useState(false);
  const [activeMovieTrailerKey, setActiveMovieTrailerKey] = useState('');

  return (
    <ScrollView style={styles.container}>
      <Modal
        style={{position: 'absolute', top: 0}}
        animationType="slide"
        transparent={true}
        statusBarTranslucent={true}
        visible={modalVisible}
        onRequestClose={() => {
          this.setState({modalVisible: false});
        }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000',
          }}>
          <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
            <View
              style={{
                backgroundColor: '#222',
                width: 48,
                height: 48,
                position: 'absolute',
                top: 40,
                justifyContent: 'center',
                alignItems: 'center',
                left: 20,
                borderRadius: 10,
              }}>
              <MaterialCommunityIcons name="close" size={20} color={'white'} />
            </View>
          </TouchableWithoutFeedback>

          <View style={{width: '100%'}}>
            <YoutubePlayer
              play={true}
              height={270}
              videoId={activeMovieTrailerKey}
            />
          </View>
        </View>
      </Modal>

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
          color={'white'}
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
        <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
          {results.map((item, index) => {
            return (
              <TrailerItems
                key={item.key}
                poster={route.params.item.backdrop_path}
                data={item}
                itemIndex={index}
                onPressFunction={() => {
                  setModalVisible(true);
                  setActiveMovieTrailerKey(item.key);
                  console.log('tıklandı');
                }}
                modalVisible={modalVisible}
              />
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  rating: {
    fontFamily: 'Poppins-Bold',
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
    fontFamily: 'Poppins-SemiBold',
  },
  header: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
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
