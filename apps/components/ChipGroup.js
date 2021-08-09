import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function ChipGroup(props) {
  //const {isDarkMode, light, dark} = props.context;
  return (
    <View>
      <View
        style={[
          styles.chipitem,
          {
            borderColor: '#0E0E0E',
            backgroundColor: 'white',
          },
        ]}>
        <Text
          style={{
            color: 'black',
            fontFamily: 'Poppins-Regular',
            fontSize: 11,
          }}>
          {props.name}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  chipitem: {
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 16,
    marginRight: 5,
    marginTop: 5,
  },
});

export default ChipGroup;
