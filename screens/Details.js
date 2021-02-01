import React from 'react';
import { View, Text, TouchableOpacity,StyleSheet, FlatList, Image, Dimensions, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import data from "../assets/data"

const { width } = Dimensions.get("window")

export default function Details({ navigation: { goBack } }) {


  const Slider = ({item}) => {
    return (
      <View style={{width}}>
        <View style={styles.Slider}>
          <View style={styles.SliderWrapper}>
            <Text style={styles.SliderText}>{item.name}</Text>
            <View style={styles.rating}>
              <Ionicons name="star" size={15} style={styles.star}/>
              <Ionicons name="star" size={15} style={styles.star}/>
              <Ionicons name="star" size={15} style={styles.star}/>
              <Ionicons name="star" size={15} style={styles.star}/>
              <Ionicons name="star" size={15} style={styles.star}/>          
                    </View>
                    <Text style={{color:"coral", fontWeight:"bold"}}>{item.price}</Text>
          </View>
          <View>
            <Image source={item.image} style={styles.SliderImage}/>
          </View>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.description}>{item.description}</Text>

          </View>
        </View>
       </View>
     )
    }
    

  return (
      <View style={{ backgroundColor: "#fff", flex: 1 }} >
          <ScrollView>
      <View >
        <View>
          <View style={styles.wrapper}>
                      <TouchableOpacity
                        onPress={() => goBack()}
                          style={styles.backButton}>
            <Feather name="chevron-left" size={24}/>
            </TouchableOpacity>
            <View style={styles.cartButton}>
              <Ionicons name="cart-outline" size={24} style={{color:"coral"}}/>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>8</Text>
              </View>
            </View>
            
          </View>
          <View>
            <FlatList
              data={data}
              keyExtractor={(data) => data.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              renderItem={Slider}
              />
          </View>
        </View>
              </View>
              <View style={[styles.button,{marginBottom:20}]}>
                  <Button title="Buy now"/>
            </View>
           </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center"
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8f8f7",
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 0
    },
    shadowRadius: 2,
    shadowOpacity: 0.08
  },
  cartButton: {
flexDirection:"row"
  },
  badge: {
    width: 18,
    height: 18,
    borderRadius: 18,
    alignItems: "center",
    backgroundColor: "coral",
    marginTop: -8,
    marginLeft:-10

  },
  badgeText: {
    color: "#fff",
    fontSize:10
  },
  Slider:{
      alignItems: "center",
      marginTop:20
  },
SliderWrapper:{
  alignItems:"center"
},
  SliderText: {
    fontSize:20,
    fontWeight: "bold",
    color: "#555",
    textAlign:"center"

  },
  rating: {
    flexDirection:"row"
  },
star:{
  color: "#ffd202",
  margin:2,
},
SliderImage:{
  // width: "100%",
  height: width / 1.5,
  resizeMode: "contain",
  marginVertical: 20,
    },
    descriptionContainer: {
        paddingHorizontal:20
    },
    description: {
        // fontFamily:"Times New Roman",
        fontWeight:"500"
    },
});