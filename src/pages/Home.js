import React, {useState, useEffect} from 'react'
import { 
    StyleSheet, 
    Text, 
    View,
    FlatList,
    TextInput,
    TouchableOpacity, 
    Button,
    Image,
    KeyboardAvoidingView,
    ScrollView,
    SafeAreaView  
    } from 'react-native'

import axios from 'axios';
import * as firebase from 'firebase';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { fonts } from 'react-native-elements/dist/config';


export default function Home({navigation}) {
    const [user, setUser] = useState({})
    const [itemIndonesia,setItemIndonesia] = useState("")
    const [itemProvinsi,setItemProvinsi] = useState("")
    const [value, setValue]=useState("")
    
    // const [selectedUser, setSelecteduUser]=useState({})
      
    // console.log(user)

    useEffect(() => {
       const userInfo =firebase.auth().currentUser
       setUser(userInfo)
       GetDataIndonesia()
       GetDataProvinsi()
       
    }, [])

    const onLogout=()=>{
        firebase.auth()
        .signOut()
            .then(()=>{
                console.log('user Sign out');
                navigation.navigate('GetStarted')
            }
            )
        
    }
    const GetDataIndonesia =()=>{
        axios.get('https://api.kawalcorona.com/indonesia')
        .then(res=>{
            const data1=(res.data)
            // console.log('res: ',data1)
            setItemIndonesia(data1)
        })
    }
    const GetDataProvinsi =()=>{
        axios.get('https://api.kawalcorona.com/indonesia/provinsi/')
        .then(res=>{
            const data2=(res.data)
            // console.log('res: ',data2)
            setItemProvinsi(data2)
        })
    }
    const onSelectItem = (item)=>{
        // console.log(item)
        navigation.navigate('ListProvinsi', item)
        
    }
    
    
    return (
        <KeyboardAvoidingView
        behavior = {Platform.OS =="ios"? "padding":"height"}
        style={styles.container}>

             
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.subHeader}>
                    <View style={styles.subContentHeader}>
                        <View style={styles.logoStyle}>
                            <Image source={require('../img/Logo_update.png')}/>
                        </View>
                    </View>
                    <View style={{borderRadius:8, padding:2}}>
                        <TouchableOpacity onPress={onLogout} title="Logout">
                            <Icon name="sign-out-alt" size={30} color='#fff'/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
           
            <View style={{paddingVertical:10, marginTop:20}}>
                <Text style={{fontWeight:'bold', fontSize:22, textAlign:'center'}}>Kasus Covid-19 di Indonesia</Text>
            </View>

            <View>
                <SafeAreaView>
                <FlatList data={itemIndonesia}
                        keyExtractor={(item, index)=> `${item.id}-${index}`}
                        renderItem={({item})=>{
                            return (
                            <View >
                                <View style={{
                                    marginLeft:50,
                                    marginRight:50,
                                    }}>
                                    <View style={{
                                        flexDirection:'row', 
                                        backgroundColor:'#fafafa', 
                                        alignItems:'center',
                                        paddingHorizontal:20,
                                        paddingVertical:8,
                                        borderRadius:8,
                                        elevation : 7}}>
                                        
                                        <View style={{
                                            flex:1, 
                                            justifyContent:'center', 
                                            alignItems:'flex-start',
                                            }}>
                                            <Text style={{
                                                fontSize:22,
                                                fontWeight:'bold',
                                                color:'#3742fa'
                                                }}>{item.positif}</Text>
                                            <Text style={{color:'#3742fa', fontWeight:'bold'}}>Kasus positif</Text>
                                        </View>
                                        <Icon name="virus" size={30} color="#3742fa" />
                                    </View>

                                    <View style={{
                                        flexDirection:'row', 
                                        backgroundColor:'#fafafa', 
                                        alignItems:'center',
                                        paddingHorizontal:20,
                                        paddingVertical:8,
                                        borderRadius:8,
                                        elevation : 7,
                                        marginTop:10}}>
                                        <Icon name="procedures" size={30} color="#ffa801" />
                                        <View style={{
                                            flex:1, 
                                            justifyContent:'center', 
                                            alignItems:'flex-end',
                                            }}>
                                            <Text style={{
                                                fontSize:22,
                                                fontWeight:'bold',
                                                color:'#ffa801'
                                                }}>{item.dirawat}</Text>
                                            <Text style={{color:'#ffa801', fontWeight:'bold'}}>Pasien Dirawat</Text>
                                        </View>
                                    </View>

                                    <View style={{
                                        flexDirection:'row', 
                                        backgroundColor:'#fafafa', 
                                        alignItems:'center',
                                        paddingHorizontal:20,
                                        paddingVertical:8,
                                        borderRadius:8,
                                        elevation : 7,
                                        marginTop:10}}>
                                        <View style={{
                                            flex:1, 
                                            justifyContent:'center', 
                                            alignItems:'flex-start',
                                            }}>
                                            <Text style={{
                                                fontSize:22,
                                                fontWeight:'bold',
                                                color:'#2ed573'
                                                }}>{item.sembuh}</Text>
                                            <Text style={{color:'#2ed573', fontWeight:'bold'}}>Pasien Sembuh</Text>
                                        </View>
                                        <Icon name="head-side-mask" size={30} color="#2ed573" />                                        
                                    </View>

                                    <View style={{
                                        flexDirection:'row', 
                                        backgroundColor:'#fafafa', 
                                        alignItems:'center',
                                        paddingHorizontal:20,
                                        paddingVertical:8,
                                        borderRadius:8,
                                        elevation : 7,
                                        marginTop:10}}>
                                        <Icon name="skull" size={30} color="#900" />
                                        <View style={{
                                            flex:1, 
                                            justifyContent:'center', 
                                            alignItems:'flex-end',
                                            }}>
                                            <Text style={{
                                                fontSize:22,
                                                fontWeight:'bold',
                                                color:'#900'
                                                }}>{item.meninggal}</Text>
                                            <Text style={{color:'#900', fontWeight:'bold'}}>Pasien Meninggal</Text>
                                        </View>
                                    </View>


                                </View>
                            </View>
                            )
                        }}
                
                 />
                 </SafeAreaView>
            </View>
            
            <View style={{paddingVertical:10, marginTop:10}}>
                <Text style={{fontWeight:'bold', fontSize:22, textAlign:'center'}}>Persebaran Covid di Indonesia</Text>
            </View>
            
            <View>
                <SafeAreaView>
                    <FlatList
                            data={itemProvinsi}
                            keyExtractor={(item, index)=> `${item.id}-${index}`}
                            renderItem={({item})=>{
                                return (
                                    <View style={{margin:5}}>
                                        <TouchableOpacity onPress={()=>onSelectItem(item)}
                                        style={{
                                            borderRadius: 1,
                                            backgroundColor:'#Fafafa', 
                                            paddingVertical:5, 
                                            marginBottom:0,
                                            borderRadius:8
                                            }}>
                                            <Text style={{color:'#000', textAlign:'center'}}>Provinsi {item.attributes.Provinsi}</Text>
                                        </TouchableOpacity>
                                    </View>

                                )
                            }}
                        
                        
                    />
                </SafeAreaView>
                
            </View>
             
        </View>
         
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#67C5E5'
    },
    header:{
        height : 50,
        // backgroundColor:'#fff',
        marginTop:30,
        justifyContent:'center'

    },
    subHeader:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:18,
        justifyContent:'space-between'
    },
    subContentHeader:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    Footer:{
        flex:4,
        backgroundColor:'#67C5E5'
    },
    logoStyle:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:20,
        marginBottom:10,
    },


    
})



 // <View style={styles.container}>
        //     <Text>Halaman Home</Text>
        //         <Text>Hello, {user.email}</Text>
        //     <Button onPress={onLogout} title="Logout"/>
        // </View>

