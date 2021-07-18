import React from 'react';
import {
   StyleSheet,
   Text,
   View,
   Dimensions,
   Image,
   ImageBackground,
   TouchableOpacity,
   Touchable
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import * as theme from '../../assets/theme';

const colors = theme.light;
const font = theme.font;
const sizes = theme.sizes;

const windowWidth = Dimensions.get('window').width;
 
const SingleOffer = ({route, navigation}) => {
    const { item } = route.params;

    const Stars = []; 
    for(var i=0;i<item.stars;i++) {
        Stars.push(<Icon name="star" color={colors.second} size={20} solid />) ;
    }
    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.image}
                source={{uri: item.picture}}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => navigation.goBack()}>
                        <Icon name="arrow-circle-left" color={colors.primary} size={35} />
                    </TouchableOpacity>
            </ImageBackground>
            <View style={styles.bodyContainer}>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                            style={{height: 50, width: 50}}
                            source={{uri: item.ownerLogo}} />
                        <View style={{marginLeft: 10, justifyContent: 'space-between'}}>
                            <Text style={styles.title}>{item.owner}</Text>
                            <Text style={styles.subTitle}>{item.location}</Text>
                        </View>
                    </View>
                    <View style={styles.starsContainer}>
                        {Stars}
                    </View>
                </View>

                <View style={{marginTop: 20}}>
                    <Text style={[styles.title, {fontSize: sizes.h5}]}>{item.title}</Text>
                    <Text style={styles.subTitle}>{item.description}</Text>
                    
                    <View style={styles.priceContainer}>
                        <View>
                            <Text>
                                <Text style={[styles.title, {fontSize: sizes. h6}]}>{item.newPrice} </Text>
                                <Text style={[styles.title, {fontSize: sizes. h4}]}>DT</Text>
                            </Text>
                            <Text>
                                <Text style={[styles.title, {fontSize: sizes. h5,textDecorationLine: 'line-through'}]}>{item.price} </Text>
                                <Text style={[styles.title, {fontSize: sizes. h3,textDecorationLine: 'line-through'}]}>DT</Text>
                            </Text>
                        </View>
                        <View style={styles.discountContainer}>
                            <Text style={[styles.title, {fontSize: sizes. h4}]}>-{item.discount}%</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.btnContainer}>
                    <Text style={styles.btnText}>Allez-y</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    image: {
        paddingTop: 20,
        paddingLeft: 20,
        width: windowWidth,
        height: windowWidth
    },
    bodyContainer: {
        flex: 1,
        padding: 10,
    },
    starsContainer: {
        marginTop: 10,
        flexDirection: 'row',
    },
    title: {
        fontWeight: 'bold',
        fontSize: sizes.h4,
        color: colors.text,
        fontFamily: font
    },
    subTitle: {
        fontSize: sizes.h2,
        color: colors.text,
        fontFamily: font
    },
    footer: {
        padding: 10,
    },
    btnContainer: {
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary
    },
    btnText: {
        fontWeight: 'bold',
        fontSize: sizes.h4,
        color: colors.text,
        fontFamily: font
    },
    priceContainer: {
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    discountContainer: {
        padding: 7,
        borderRadius: 10,
        backgroundColor: colors.primary
    }
});
 
export default SingleOffer;
 