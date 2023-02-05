import React from 'react';
import { FlatList } from 'react-native';
import Post from '../Post';
import Stories from '../Stories';
const data = [
    {
    user: {
      imageUri: "https://i.pravatar.cc/300",    // for the user avatar image
      name: "Lukas"
    },
    imageUri: 'https://i.pravatar.cc/300', //for the actual content / post
    caption: "Beautiful city #Instagram",
    likesCount: 1234,
    postedAt: '6 minutes ago'
  },
  {
    user: {
      imageUri: "https://i.pravatar.cc/300",    // for the user avatar image
      name: "Lukas"
    },
    imageUri: 'https://i.pravatar.cc/300', //for the actual content / post
    caption: "Beautiful city #Instagram",
    likesCount: 1234,
    postedAt: '6 minutes ago'
  },
  {
    user: {
      imageUri: "https://i.pravatar.cc/300",    // for the user avatar image
      name: "Lukas"
    },
    imageUri: 'https://i.pravatar.cc/300', //for the actual content / post
    caption: "Beautiful city #Instagram",
    likesCount: 1234,
    postedAt: '6 minutes ago'
  },
]
  

function Feed() : JSX.Element {
    return(
        <FlatList
        data={data}
        renderItem={({item}) => <Post post={item} />}
        ListHeaderComponent={Stories}
        />
    );
};

export default Feed;