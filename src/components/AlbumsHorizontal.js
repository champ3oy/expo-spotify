import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { colors, fonts, images } from '../api';

const albumsArray = [
  { id: 1, image: 'exRe', title: 'Ex:Re' },
  { id: 2, image: 'swimming', title: 'Swimming' },
  { id: 3, title: 'Lux Prima' },
  { id: 4, title: 'Man On The Moon II: The Legend of Mr. Rager' },
  { id: 5, title: 'Sea Of Cowards' },
  { id: 6, title: 'Wish You Were Here' },
  { id: 7, title: 'Extraordinary Machine' },
  { id: 8, title: 'The Creek Drank The Cradle' }
];

const AlbumsHorizontal = ({ heading, tagline }) => {
  return (
    <View style={styles.container}>
      {heading && <Text style={styles.heading}>{heading}</Text>}
      {tagline && <Text style={styles.tagline}>{tagline}</Text>}

      <FlatList
        contentContainerStyle={styles.containerContent}
        data={albumsArray}
        horizontal
        keyExtractor={itemObj => itemObj.id.toString()}
        renderItem={itemObj => {
          const { item } = itemObj;

          return (
            <View style={styles.item}>
              <View style={styles.image}>
                {item.image && (
                  <Image source={images[item.image]} style={styles.image} />
                )}
              </View>
              <Text style={styles.title}>{item.title}</Text>
            </View>
          );
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

AlbumsHorizontal.defaultProps = {
  heading: null,
  tagline: null
};

AlbumsHorizontal.propTypes = {
  // optional
  heading: PropTypes.string,
  tagline: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
    width: '100%'
  },
  containerContent: {
    paddingLeft: 16
  },
  heading: {
    color: colors.white,
    fontFamily: fonts.spotifyBold,
    fontSize: 18,
    paddingBottom: 6,
    textAlign: 'center'
  },
  tagline: {
    color: colors.greyInactive,
    fontFamily: fonts.spotifyRegular,
    fontSize: 12,
    paddingBottom: 6,
    textAlign: 'center'
  },
  item: {
    marginRight: 16,
    width: 148
  },
  image: {
    backgroundColor: colors.greyLight,
    height: 148,
    width: 148
  },
  title: {
    color: colors.white,
    fontFamily: fonts.spotifyBold,
    fontSize: 12,
    marginTop: 4,
    textAlign: 'center'
  }
});

export default AlbumsHorizontal;