import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import * as theme from '../../assets/theme';

const colors = theme.light;
const font = theme.font;
const sizes = theme.sizes;

const BestOffer = (props) => {
    const item = props.item;
    const Stars = []; 
    for(var i=0;i<item.stars;i++) {
        Stars.push(<Icon name="star" color={colors.second} size={15} solid />) ;
    }
    return(
        <View style={[styles.container, item.id == 1 ? {marginLeft: 20} : null]}>
            <Image
                style={styles.image}
                source={{uri: item.picture}} />
            <View style={styles.textContainer}>
                <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
                <Text style={styles.ownerText} numberOfLines={1}>{item.owner} (2.3km)</Text>
                <View style={styles.starsContainer}>
                    {Stars}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginRight: 10,
        borderRadius: 10,
        backgroundColor: colors.lightbg
    },
    image: {
        width: 150, 
        height: 150,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    textContainer: {
        width: 150,
        padding: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    title: {
        fontSize: sizes.h2,
        fontFamily: font,
        color: colors.text
    },
    ownerText: {
        fontSize: sizes.h1,
        fontFamily: font,
        color: colors.text
    },
    starsContainer: {
        marginTop: 5,
        flexDirection: 'row'
    }
});

export default BestOffer;
