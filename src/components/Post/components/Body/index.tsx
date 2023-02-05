import React from 'react';
import { Text, Image } from 'react-native';
import styles from './styles';

function Body({ imageUri }): JSX.Element {
    return (
        <Image 
            source={{uri:imageUri}}
            style={ styles.image }
        />
    );
}

export default Body;