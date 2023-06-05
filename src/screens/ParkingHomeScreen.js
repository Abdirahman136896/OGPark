import { ScrollView, StyleSheet, Text, View, Dimensions, TouchableOpacity, Modal } from 'react-native'
import React,{useState} from 'react'
import {Icon} from 'react-native-elements'
import ParkingHeader from '../components/ParkingHeader'
import { menu, parkingData } from '../global/Data'
import {colors,fonts} from '../global/mstyles'
import { TabBar, TabView } from 'react-native-tab-view'
import MenuScreen from './ParkingTabs/MenuScreen'

const SCREEN_WIDTH = Dimensions.get('window').width
const initialLayout = SCREEN_WIDTH;

const ParkingHomeScreen = ({navigation,route}) => {

    const {id,parking} = route.params

    const [routes] = useState([
        {key:'first',title:"MENU"},
        {key:'second',title:"INFO"},
        {key:'third',title:"REVIEWS"},
        {key:'fourth',title:"GALLERY"},
    ])


    const [index,setIndex] = useState(0)
    const [modalVisible, setModalVisible] = useState(false)

    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{backgroundColor:colors.cardbackground}}
            tabStyle={styles.tabStyle}
            scrollEnabled={true}
            style={styles.tab}
            labelStyle={styles.tabLabel}
            contentContainerStyle={styles.tabContainer}
        />
    )

    const UpdateRoute1 = ()=>{
        return(
            <View>

            </View>
        )
    }

    const menuPressed = () => {
        navigation.navigate('MenuItemsScreen')
    }

    
    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <ParkingHeader id={id} navigation={navigation}/>
                    {parkingData[id].discount &&
                        <View style ={styles.view1}>
                            <Text style ={styles.text1}>GET {parkingData[id].discount}% OFF ON PARKING TOTAL</Text>
                        </View>
                    }
                    <View style ={styles.view2}>
                        <View style ={styles.view3}>
                            <Text style ={styles.text2}>{parkingData[id].parkName}</Text>
                            <Text style ={styles.text3}>{parkingData[id].serviceType}</Text>
                            <View style ={styles.view4}>
                                <Icon name ="star" type ="material-community" color = {colors.grey3} size = {15} />
                                <Text style ={styles.text4}>{parkingData[id].averageReview}</Text>
                                <Text style ={styles.text5}>({parkingData[id].numberOfReview} reviews)</Text>
                                <Icon name ="map-marker" type ="material-community" color = {colors.grey3} size = {15} />
                                <Text style ={styles.text5}>{parkingData[id].farAway} mi away</Text> 
                            </View>
                        </View>
                        <View style ={styles.view8}>
                            <Text style ={styles.text6}>Est.Arrival Time</Text>
                            <View style ={styles.view9}>
                                <Text style = {styles.text9}>{parkingData[id].estimatedArrivalTime}</Text>
                                <Text style ={styles.text11}>min</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.view10}>
                    <TabView
                        navigationState={{index,routes}}
                        renderScene={UpdateRoute1}
                        onIndexChange={setIndex}
                        initialLayout={initialLayout}
                        renderTabBar={renderTabBar}
                        tabBarPosition='top'
                    />
                </View>
                {
                    index === 0 &&
                        <MenuScreen onPress={menuPressed}/>
                }
            </ScrollView>
            <TouchableOpacity>
                <View style={styles.view11}>
                    <View style={styles.view12}>
                        <Text style={styles.text13}>Parking Order Summary</Text>
                        <View style={styles.view13}>
                            <Text style={styles.text13}>0</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            
        </View>
    )
}

export default ParkingHomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:20
    },
    view1:{
        padding:3,
        alignItems:"center",
        justifyContent:"center"
    },
    text1:{
        color:colors.buttons,
        fontSize:14,
        fontWeight:"bold"
    },
    view2:{ 
        flexDirection:"row",
        flex:1,
        marginBottom:5,
        marginHorizontal:10,
        justifyContent:"space-between",
    },
    view3:{
        flex:8,
    },
    text2:{
        fontSize:20,
        fontWeight:"bold",  
        color:colors.grey1
    },
    text3:{
        fontSize:15,
        color:colors.grey3
    },
    view4:{
        flexDirection:'row',
        alignItems:"center",
        marginTop:5
    },
    text4:{
        //fontFamily :fonts.android.bold,
        fontWeight:"bold",
        fontSize:13,
        color:colors.grey3,
        marginLeft:2,
    },
    text5:{
        //fontFamily :fonts.android.bold,
        fontWeight:"bold",
        fontSize:13,
        color:colors.grey3,
        marginLeft:2,
        marginRight:5
    },
    text6:{
        //fontFamily :fonts.android.bold,
        fontWeight:"bold",
        fontSize:13,
        color:colors.grey3,
        marginLeft:0,
    },
    view5:{ 
        flex:3,
        alignItems:"center"
    },
    text6:{
        fontSize:15,
        fontWeight:"bold",
        color:colors.grey1
    },
    view7:{
        width:40,
        height:40,
        alignItems:"center",
        borderRadius:20,
        justifyContent:"space-around",
    },
    text7:{
        fontSize:16,
        fontWeight:"bold",
        color:colors.black,
        marginTop:5
    },
    text8:{
        fontSize:13,
        color:colors.black,
        marginBottom:5
    },
    view8:{
        flex:4,
        alignItems:"center",
        paddingVertical:20,
        paddingRight:2,
    },
    text9:{
        fontSize:15,
        fontWeight:"bold",
        color:colors.cardbackground
    },
    view9:{
        width:40,
        height:40,
        backgroundColor:colors.buttons,
        alignItems:"center",
        borderRadius:20,
        justifyContent:"space-around",
    },
    text10:{
        fontSize:16,
        fontWeight:"bold",
        color:colors.cardbackground,
        marginTop:5
    },
    text11:{
        fontSize:13,
        color:colors.cardbackground,
        marginBottom:5
    },
    view10:{
        elevation:10,
        backgroundColor:colors.pagebackground
    },
    view11:{
        backgroundColor:colors.buttons,
        height:50,
        alignContent:"center",
        marginBottom:0,
        justifyContent:"center" 
    },
    view12:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    text12:{
        padding:10,
        fontWeight:"bold",
        fontSize:18,
        color:colors.cardbackground
    },
    view13:{ 
        borderWidth:1,
        marginRight:10,
        borderColor:colors.cardbackground,
        borderRadius:6,
        paddingBottom:2
    },
    text13:{
        paddingHorizontal:3,
        fontWeight:"bold",
        fontSize:18,
        color:colors.cardbackground,
    },
    tab:{ 
        paddingTop :0,
        backgroundColor:colors.buttons,
        justifyContent:"space-between",
        alignItems:"center"
    },
    tabContainer:{ 
        alignItems:'center',
        alignContent:'center',
        justifyContent:'center',
    },
    tabLabel:{
        fontWeight:'bold',
        color: colors.cardbackground
    },
    tabStyle:{
        width:SCREEN_WIDTH/4,
        maxHeight:45,
    },
    view14:{
        flexDirection:"row",
        alignItems:"center",
        padding:10,
        backgroundColor:colors.buttons,
        top:0,
        left:0,
        right:0,
        paddingTop:25
    },
    text14:{
        fontWeight:"bold",
        marginLeft:40,
        color:colors.black,
        fontSize:18
    },
    view15:{
        marginTop:5,
        paddingBottom:20
    },
})