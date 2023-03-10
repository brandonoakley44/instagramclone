import React from 'react';
import { View, Text } from 'react-native';
import ProfilePicture from '../ProfilePicture';
import styles from './styles';

function Story({  imageUri, name  }) :JSX.Element {
    return (
        <View style={styles.container}>
            <ProfilePicture uri={imageUri} />
            <Text style={styles.name }>{name}</Text>
        </View>
    );
}

export default Story;