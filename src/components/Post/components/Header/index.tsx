import React from 'react';
import { View , Text} from 'react-native';
import ProfilePicture from "../../../ProfilePicture";
import styles from './styles';
import Icon from 'react-native-vector-icons/Entypo';

function Header({ imageUri, name }): JSX.Element {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
            <ProfilePicture uri={imageUri} size={40}/>
                <Text style={styles.name}>{name}</Text>
            </View>
            <View style={styles.right} >
                <Icon name="dots-three-vertical" size={18} />
            </View>
        </View>
    );
}

export default Header;