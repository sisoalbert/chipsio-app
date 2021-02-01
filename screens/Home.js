import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, TextInput, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native'
import Feather from "react-native-vector-icons/Feather";
import Octicons from "react-native-vector-icons/Octicons";
import { useNavigation } from '@react-navigation/native';

import data from "../assets/data"

const { height, width } =Dimensions.get("window")

export default function Home({ navigation}) {//nav

    const Featured = ({ item }) => {
        return (
            <View style={[styles.featured, {
              marginRight: item.id === "4" ? 20 : 0
            },
            ]} >
              <Image source={item.image} style={styles.FeaturedImage} />
              <Text style={styles.featuredText}>{item.name}</Text>
            </View>
          )
          }

    const Popular = ({ item }) => {

        return (
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate("Details")
                }
                
                style={[styles.popular, {
                    marginLeft: item.id === "1" ? 20 : 0
                },]}>
                <Image source={item.image} style={styles.popularImage} />
                <Text style={styles.popularTitle}>{item.name}</Text>
                <Text style={styles.popularPrice}>{item.price}</Text>
                <View style={styles.action}>
                    <View style={styles.rating}>
                        <Octicons name='star' size={15} style={styles.star}/>
                        <Octicons name='star' size={15} style={styles.star}/>
                        <Octicons name='star' size={15} style={styles.star}/>
                        <Octicons name='star' size={15}style={styles.star} />
                        <Octicons name='star' size={15} style={styles.star}/>                        
                    </View>
                    <View style={styles.button}>
                        <Feather name="chevron-right" size={15}/>
                    </View>
                </View>
            </TouchableOpacity>
        )
        
    }

    return (
        <View style={{backgroundColor:"#fff", flex:1}}>
            <SafeAreaView>
                <View style={styles.container}>
                    <View>
                <View>
                    <Text style={styles.title}>Welcome to</Text>
                </View>
                <View style={styles.subHeader}>
                 <Text style={styles.subTitle}> Chipsio </Text>
                            <Feather name="zap" size={24} style={{
                                marginLeft: 10,
                                color: "#565656"
                            }}
                            />
                        </View>
                        </View>
                        <Feather name="grid" size={24} />
                </View>
                <View style={styles.wrapper}>
                    <View  style={styles.search}>
                        <Feather name="search" size={24} style={{
                            marginRight: 10,
                            color:"#c8c8c8"
                        }} />
                        <TextInput placeholder="search" placeholderTextColor="#d8d8d8"/>
                    </View>
                </View>
                <View style={styles.wrapper}>
                    <Text style={styles.headerText}>Popular</Text>
                </View>
                <View style={styles.wrapper}>
                    <FlatList
                        data={data}
                        keyExtractor={data => data.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={Popular}
                    />
                </View>
                <View style={styles.wrapper}>
                    <View>
                        <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems:"center"
                        }}>
                        <Text style={styles.headerText}>Featured Items</Text>
                        <Text style={styles.headerSubText}>See all</Text>
                        </View>
                    </View>
                    <View>
                        <FlatList
                            data={data}
                            keyExtractor={data => data.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={Featured}
                            />
                    </View>
                </View>
                
            </SafeAreaView>
     </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent:"space-between"
    },
    title: {
        fontSize: 24,
        color: "coral",
        fontWeight:"bold"
},
    subHeader: {
        flexDirection: "row",
        alignItems: "center",
        
},
    subTitle: {
        fontSize: 24,
        fontWeight: "bold",
        color:"#565656"
    },
    wrapper: {
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    search: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f4f3f3",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius:40        
    },
    headerText: {
        fontWeight: "bold",
        color: "#2e2e2e",
        fontSize:18,
        
    },
    popular: {
        marginTop: 30,
        paddingLeft: 10,
        paddingRight: 20,
        marginRight: 60,
        backgroundColor: "#f8f8f7",
        height: height / 4,
        width: height / 5.5,
        borderRadius: 20,
        paddingBottom: 20,
        justifyContent: "flex-end",
        shadowColor: "#000",
        shadowOffset: {
          width: 2,
          height:2
        },
        shadowRadius: 2,
        shadowOpacity: 0.08,
        marginBottom: 20,
            
    },
    popularImage: {
        width: 150,
        height: 180,
        resizeMode: "contain",
        position: "absolute",
        top: -60,
        right: -70,
        shadowColor: "#000",
        shadowOffset: {
          width: 4,
          height:0
        },
        shadowRadius: 2,
        shadowOpacity: 0.08,  
        },
    popularTitle: {
        color: "#606060",
        fontWeight: "bold",
        fontSize: 13, 
        width: 60
    },
    popularPrice: {
        color: "coral",
        fontWeight: "bold",
        fontSize: 10,
        paddingTop:10
    },
    action: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop:10,
    },
    rating: {
        flexDirection: "row",
    },
    star: {
        color: "#ffd206",
        marginRight: 2
},
    button: {
        color: "#ffd206",
        marginRight: 2
    },
    featured:{
        backgroundColor: "#f8f8f7",
        marginLeft: 20,
        width: width/3 - 25,
        height: width/3,
        alignItems: "center",
        justifyContent: "flex-end",
        paddingBottom: 10,
        marginBottom: 20,
        marginTop: 30,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 4,
          height:0
        },
        shadowRadius: 2,
        shadowOpacity: 0.08,
    
      },
      FeaturedImage:{
        width: 60,
        height: 120,
        resizeMode: "contain",
        top: -25,
        position:"absolute"
      },
      featuredText:{
        textAlign: "center",
          fontSize: 12,
          width:75
    
      },
    

})