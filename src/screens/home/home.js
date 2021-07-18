import React from 'react';
import {
   StyleSheet,
   Image,
   Text,
   View,
   TextInput,
   TouchableOpacity,
   FlatList
} from 'react-native';
import Icon from "react-native-vector-icons/Feather";

import Category from '../../components/category/category';
import BestOffer from '../../components/bestOffer/bestOffer';
import * as data from '../../assets/data';

import * as theme from '../../assets/theme';

const colors = theme.light;
const font = theme.font;
const sizes = theme.sizes;
 
const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            {/* Header Container */}
            <View style={styles.headerContainer}>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <View style={{justifyContent: 'space-between'}}>
                        <Text style={styles.headerTitle}>Bonjour Skander</Text>
                        <Text style={styles.headerSubTitle}>Content de vous revoir !</Text>
                    </View>
                    <Image
                        style={{width: 50, height: 50, borderRadius: 10}}
                        source={require('../../assets/images/Skander.jpg')} />
                </View>
                <View style={styles.inputContainer}>
                    <Icon name="search" color={colors.lightbg} size={25} />
                    <TextInput
                        style={styles.input}
                        placeholder="Recherche.."
                        placeholderTextColor={colors.lightbg} />
                </View>
            </View>

            {/* Body Container */}
            <View style={styles.bodyContainer}>
                <View style={styles.blockContainer}>
                    <Text style={styles.title}>Catégories</Text>
                    <View style={styles.categories}>
                        <Category icon="hamburger" label="Sandwich" />
                        <Category icon="pizza-slice" label="Pizza" />
                        <Category icon="utensils" label="Plat" />
                        <Category icon="cheese" label="Gâteau" />
                    </View>
                </View>

                <View style={[styles.blockContainer, {paddingLeft: 0, paddingRight: 0}]}>
                    <Text style={[styles.title, {marginLeft: 20}]}>Meilleures Offres</Text>
                    <FlatList 
                        data={data.offers}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={ (item, index) => index.toString() }
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity 
                                    activeOpacity={1}
                                    onPress={() => navigation.navigate('SingleOffer', {item: item})}>
                                        <BestOffer item={item} />
                                </TouchableOpacity>
                            )
                        }} />
                </View>
            </View>
        </View>
    );
};
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary
    },
    headerContainer: {
        padding: 20
    },
    headerTitle: {
        fontSize: sizes.h5,
        fontFamily: font,
        color: colors.lightbg,
        fontWeight: 'bold'
    },
    headerSubTitle: {
        fontSize: sizes.h3,
        fontFamily: font,
        color: colors.lightbg,
    },
    inputContainer: {
        marginTop: 30,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.second
    },
    input: {
        flex: 1,
        marginLeft: 5,
        fontSize: sizes.h2,
        color: colors.lightbg
    },
    // Body Container
    bodyContainer: {
        flex: 1,
        paddingTop: 10,
        marginTop: 10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: colors.background
    },
    blockContainer: {
        padding: 20,
    },
    title: {
        marginBottom: 10,
        fontSize: sizes.h4,
        fontFamily: font,
        color: colors.text,
        fontWeight: 'bold'
    },
    categories: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});
 
 export default Home;
 