import React from 'react';
import {View,Text,StyleSheet,FlatList,TouchableWithoutFeedback,ImageBackground,Dimensions} from 'react-native';
import SearchComponent from '../components/SearchComponent';
import { filterData } from '../global/Data';
import {colors} from "../global/styles";

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function SearchScreen({navigation}){

    return(
        <View style={{flex:1,marginBottom:10}}>
            <SearchComponent />
            <View style={{marginTop:10,marginBottom:50}}>
                <FlatList
                    style={{marginBottom:1}}
                    data={filterData}
                    keyExtractor={item=>item.id}
                    renderItem={({item,index})=>(
                        <TouchableWithoutFeedback
                            onPress ={()=>{
                                item.name = item.name.toLowerCase();
                                navigation.navigate("SearchResultScreen",{item:item.name})
                            }}
                        >
                            <View style = {styles.imageView}>
                                <ImageBackground
                                    style={styles.image}
                                    source={item.image}
                                >
                                    <View style ={styles.textView}>
                                        <Text style ={{color:colors.cardbackground,fontSize:18,fontWeight:"bold"}}>{item.name}</Text>
                                    </View>
                                </ImageBackground>
                            </View>
                        </TouchableWithoutFeedback>
                    )}
                    horizontal ={false}
                    showsverticalScrollIndicator = {false}
                    numColumns ={2}
                    ListHeaderComponent = { <Text style = {styles.listHeader}>All Categories</Text>}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imageView : {  
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        width:SCREEN_WIDTH*0.4475,
        height:SCREEN_WIDTH*0.4475,
        marginLeft:SCREEN_WIDTH*0.035,
        marginBottom:SCREEN_WIDTH*0.035
    },

    image : {     
        height:SCREEN_WIDTH*0.4475,
        width:SCREEN_WIDTH*0.4475,
        borderRadius:10, 
    },

    listHeader: {  
        fontSize:16,
        color:colors.grey2,
        paddingBottom:10,
        marginLeft:12
    },
    textView : {  height:SCREEN_WIDTH*0.4475,
        width:SCREEN_WIDTH*0.4475,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:'rgba(52, 52, 52,0.3)'
    },
})