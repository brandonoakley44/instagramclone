import React , { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import ADIcon from 'react-native-vector-icons/AntDesign';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';



//  likesCountProp is just to avoid duplicate naming in likesCount hook
function Footer({ likesCount: likesCountProp, caption, postedAt }): JSX.Element {

    const [ isLiked, setIsLiked ] = useState(false);
    const [ likesCount, setLikesCount ] = useState(0);

    const onLikePressed = () => {
        setIsLiked(!isLiked);
        const amount = isLiked ? -1 : 1;
        setLikesCount( likesCount + amount );
    }

    useEffect(() => {
        setLikesCount(likesCountProp);
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.iconsContainer}>
            <View style={styles.leftIcons}>
                <TouchableOpacity onPress={onLikePressed}>
                    {isLiked ? 
                     <ADIcon name="heart" size={24} color={"#e73838"} />
                    : 
                    <ADIcon name="hearto" size={24} color={"#545454"} />
                }
                </TouchableOpacity>
                <FontistoIcon name="comment" size={23} color={"#545454"}  />
                <IoniconsIcon name="paper-plane-outline" size={25}  color={"#545454"} />
            </View>
                <FAIcon name="bookmark-o" size={24} color={"#545454"} />
            </View>
            <Text style={styles.likes}>{likesCount} likes</Text>
            <Text style={styles.caption}>{caption}</Text>
            <Text style={styles.postedAt}>{ postedAt }</Text>
        </View>
    );
}

export default Footer;