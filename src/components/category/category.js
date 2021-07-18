import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import * as theme from '../../assets/theme';

const colors = theme.light;
const font = theme.font;
const sizes = theme.sizes;

const Category = (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Icon name={props.icon} color={colors.primary} size={25} />
            </View>
            <Text style={styles.label}>{props.label}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginRight: 5,
        alignItems: 'center',
    },
    iconContainer: {
        height: 60,
        width: 60,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.lightbg
    },
    label: {
        marginTop: 3,
        fontSize: sizes.h2,
        fontFamily: font,
        color: colors.text
    }
});

export default Category;
