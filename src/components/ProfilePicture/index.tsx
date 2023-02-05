import React from 'react';
import { Image , View } from 'react-native';

import styles from './styles';

function ProfilePicture({ uri, size = 70 }) : JSX.Element {
    return (
        <View style={[styles.container, {width: size + 7, height: size + 7}]}>
            <Image source = {{ uri:  uri }} style={[styles.image, { width: size, height: size  }]} />
        </View>
    )
}

export default ProfilePicture;

// uri:  'https://via.placeholder.com/300/09f/fff.png' 