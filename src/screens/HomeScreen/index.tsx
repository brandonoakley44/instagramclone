import React from 'react';
import { Text , StyleSheet , View} from 'react-native';
import Stories from '../../components/Stories';
import Post from '../../components/Post';
import Feed from '../../components/Feed';

function HomeScreen() : JSX.Element {
  return( 
    <View>
      
      <Feed />
    </View>
  );
}

const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 132,
      paddingHorizontal: 240,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });
  

export default HomeScreen;


  