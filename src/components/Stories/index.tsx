import React from 'react';
import Story from '../Story';
import { View , FlatList} from 'react-native';
import styles from './styles';
const data = [
    {
        imageUri: 'https://i.pravatar.cc/300',
        name: 'Geoff'
    },
    {
        imageUri: 'https://i.pravatar.cc/300',
        name: 'Matt'
    },
    {
        imageUri: 'https://i.pravatar.cc/300',
        name: 'Chris'
    },
    {
        imageUri: 'https://i.pravatar.cc/300',
        name: 'Mike'
    },
    {
        imageUri: 'https://i.pravatar.cc/300',
        name: 'Geoff'
    },
    {
        imageUri: 'https://i.pravatar.cc/300',
        name: 'Matt'
    },
    {
        imageUri: 'https://i.pravatar.cc/300',
        name: 'Chris'
    },
    {
        imageUri: 'https://i.pravatar.cc/300',
        name: 'Mike'
    },
];

function Stories() : JSX.Element {
    return(
        <FlatList 
           style={styles.container}
           data={data}
           horizontal
           showsHorizontalScrollIndicator={false}
           keyExtractor={({name}) => name}
           renderItem={({ item }) => <Story imageUri={item.imageUri} name={item.name} />} 
        />
    );  
};

export default Stories;