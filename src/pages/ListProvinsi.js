// import { Image } from 'native-base'
import React from 'react'
import { StyleSheet, Text, View, Image, FlatList,Card, TouchableOpacity } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Icon from 'react-native-vector-icons/FontAwesome5'

const ListProvinsi = ({route}) => {

    console.log('',route)


    return (
        <View style={styles.container}>
            <View style={{margin:20}}>
                <Text style={{fontSize:20, fontWeight:'bold', textAlign:'center'}}>Provinsi {route.params.attributes.Provinsi} </Text>
            </View>
            <View style={{alignItems:'center', margin:10}}>
                <Image source={require('../img/medicine.png')}/>
                <Text>#staysafe #dirumahaja #3M</Text>
            </View>
            <View style={{
                margin:20
            }}>
                <View style={{
                    flexDirection:'row', 
                    backgroundColor:'#fafafa', 
                    alignItems:'center',
                    paddingHorizontal:20,
                    paddingVertical:20,
                    borderRadius:8,
                    elevation : 7}}>
                    {/* <Icon name="viruses" size={30} color="#900" /> */}
                    <Text style={{color:'#000000', fontSize:18}}>Kasus positif</Text>
                    <View style={{
                        flex:1, 
                        justifyContent:'center', 
                        alignItems:'flex-end',
                        }}>
                        <Text style={{
                            fontSize:22,
                            fontWeight:'bold'
                            }}>{route.params.attributes.Kasus_Posi}</Text>
                        {/* <Text style={{color:'#000000'}}>Kasus positif</Text> */}
                    </View>
                </View>

                <View style={{
                    flexDirection:'row', 
                    backgroundColor:'#fafafa', 
                    alignItems:'center',
                    paddingHorizontal:20,
                    paddingVertical:20,
                    borderRadius:8,
                    elevation : 7,
                    marginTop:10}}>
                    {/* <Icon name="viruses" size={30} color="#900" /> */}
                    <Text style={{color:'#000000', fontSize:18,}}>Pasien Sembuh</Text>
                    <View style={{
                        flex:1, 
                        justifyContent:'center', 
                        alignItems:'flex-end',
                        }}>
                        <Text style={{
                            fontSize:22,
                            fontWeight:'bold'
                            }}>{route.params.attributes.Kasus_Semb}</Text>
                        {/* <Text style={{color:'#000000'}}>Pasien Sembuh</Text> */}
                    </View>
                </View>

                <View style={{
                    flexDirection:'row', 
                    backgroundColor:'#fafafa', 
                    alignItems:'center',
                    paddingHorizontal:20,
                    paddingVertical:20,
                    borderRadius:8,
                    elevation : 7,
                    marginTop:10}}>
                    {/* <Icon name="viruses" size={30} color="#900" /> */}
                    <Text style={{color:'#000000', fontSize:18}}>Pasien Meninggal</Text>
                    <View style={{
                        flex:1, 
                        justifyContent:'center', 
                        alignItems:'flex-end',
                        }}>
                        <Text style={{
                            fontSize:22,
                            fontWeight:'bold'
                            }}>{route.params.attributes.Kasus_Meni}</Text>
                        
                    </View>
                </View>
                
            </View>
        </View>
                       
        
    )
}

export default ListProvinsi

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#67C5E5',
    },
    Content:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'yellow'
    }
})
