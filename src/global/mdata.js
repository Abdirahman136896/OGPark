export const filterData = [ {name:"Search",image: require('../../assets/search_parking.png'), id:"0"},
                            {name:"Compare",image:require("../../assets/compare.png"),id:"1"},
                            {name:"Reserve",image:require("../../assets/reserve_1.png"),id:"2"},
                            {name:"Drive",image:require("../../assets/ride.png"),id:"3"},
                            {name:"Park",image:require("../../assets/park.png"),id:"4"}
                           ];


export const rideData =[
    {street:"32 Olivia Rd",area:"Klipfontein 83-Ir,Boksburg",id:"0"},
    {street:"Hughes Industrial Park",area:"Hughes,Boksburg",id:"1"},
    {street:"32 Olivia Road",area:" East Rand,Ekurhuleni,Gauteng,1459",id:"2"},
    {street:"Total Boksburg",area:"35 Atlas Rd,Anderbolt,Boksburg",id:"3"},
    {street:"179 8th Ave",area:"Bezuidenhout Valley,Johannesburg",id:"4"},
];

export const carTypeData =[
    {title:"Popular",
     data:[
    {name:"Uber Go",group :2, price:7,image: require('../../assets/uberGo.png'),note:"Affordable.compact rides",promotion:5 ,time:"20:19",id:"0"},
    {name:"UberX",group :3, price:5.5,image: require('../../assets/uberX.png'),note:"Affordable everyday trips",promotion:0,time:"20:20", id:"1"},
    {name:"Connect", group:0, price:12.6,image: require('../../assets/uberConnect.png'),note:"Send and receive packages",promotion:10,time:"20:33", id:"2"}
     ]
    },

    {title:"Premium",
    data:[
   {name:"Black",group :3, price:17.4,image: require('../../assets/uberBlack.png'),note:"Premium trips in luxury cars",promotion:0,time:"20:31",id:"3"},
   {name:"Van", group:6, price:22.3,image: require('../../assets/uberVan.png'),note:"Rides for groups up to 6",promotion:12,time:"20:31", id:"4"},
    ]
   },

   {title:"More",
   data:[
  {name:"Assist",group :3, price:35.3,image: require('../../assets/uberAssist.png'),note:"Special assistance from certified drivers",promotion:26,time:"20:25",id:"5"},
   ]
  },

];

export const requestData = [{
    name:"For Me",id:0
},
{
    name:"For Someone",id:1
}
];

export const rideOptions = [{name:"Personal",icon:"account", id:"0"},
{name:"Business",icon:"briefcase", id:"1"},  

];

export const paymentOptions = [{image:require('../../assets/visaIcon.png'),text:"Visa ...0476"},
                                {image:require('../../assets/cashIcon.png'),text:"Cash"}];

export const availableServices = ["Uber Go","UberX","Uber connect","Uber Black","Uber Van","Uber Assist"];

/*export const carsAround = [{latitude:-26.207487,longitude:28.236226},
    {latitude:-26.202616,longitude:28.227718},
    {latitude:-26.202424,longitude:28.236612},
    {latitude:-26.208565,longitude:28.237191},
    {latitude:-26.203598,longitude:28.239509},
];*/

export const carsAround = [
    {latitude:-1.33010122,longitude:36.8191669},
    {latitude:-1.32415189,longitude:36.82215065},
    {latitude:-1.31664227,longitude:36.81984324},
    {latitude:-1.32638376,longitude:36.82810778},
    {latitude:-1.31588681,longitude:36.81189338},
];



