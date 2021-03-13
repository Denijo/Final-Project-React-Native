import React from 'react'
import { Button, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'



export default function GetStarted({navigation}) {
    return (
        <View style={styles.container}>
           
            <View style={styles.header}>
                <Image style={styles.imageLogo} 
                source={require('../img/logos.png')}/>
                <View style={{marginTop:40}}>
                    <Text style={{textAlign:'center', fontSize:22, fontWeight:'bold' }}>Selamat datang</Text>
                    
                </View>
                <View style={{marginTop:20}}>
                    <Text style={{textAlign:'center', fontSize:16 }}>Aplikasi ini menyediakan informasi mengenai kasus Covid-19 di Indonesia</Text>
                </View>
            </View>
            
               
            <View style={styles.footer}>
                <View style={{marginTop:25}}>
                        <Text style={{textAlign:'center'}}>Silahkan pilih Masuk, jika sudah memiliki akun</Text>
                        <TouchableOpacity style={styles.btnLogin} onPress={()=>navigation.navigate('Login')}>
                            <Text style={styles.textBtnLogin}>Masuk</Text>
                        </TouchableOpacity>
                </View>
                <View>
                    <Text style={{textAlign:'center'}}>Atau</Text>
                    <TouchableOpacity style={styles.btnLogin}onPress={()=>navigation.navigate('Register')}>
                        <Text style={styles.textBtnLogin}>Daftar</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#67C5E5'
    },
    header:{
        flex:1,
        justifyContent:'center',
        paddingHorizontal:20,
        paddingBottom:50,

    },
    footer:{
        flex:0.5,
        backgroundColor:'#dff9fb',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        // paddingHorizontal:20,
        // paddingVertical:30
        // flexDirection:'column',
        // justifyContent:'space-between'

    },
    btnLogin:{
        backgroundColor:'#08457E',
        padding:10,
        borderRadius:25,
        marginTop:20,
        marginBottom:10,
        width:120,
        alignItems:'center',
        alignSelf:'center',
        
         
    },
    textBtnLogin:{
        color:'#fff'
    },
    imageLogo:{
        alignSelf:'center'
    }
})
          

 {/* <View style={styles.signStyle}>
                    <Text style={{textAlign:'center'}}>Silahkan pilih SignIn, jika sudah memiliki akun</Text>
                    <Button onPress={()=>navigation.navigate("Login")}title="SignIn"/>
                </View>
                <View style={styles.signStyle} >
                    <Text style={{textAlign:'center'}}>Silahkan pilih SignUp, jika belum memiliki akun</Text>
                    <Button style={styles.signUpStyle}
                        onPress={()=>navigation.navigate("Register")}title="SignUp"/>
                </View> */}
                