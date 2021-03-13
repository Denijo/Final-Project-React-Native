import React, {useState, useEffect} from 'react'
import { Button, StyleSheet, Text, View, Image} from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import * as firebase from 'firebase';

export default function Login({navigation}) {
     
    const firebaseConfig={
        apiKey: "AIzaSyCNbXeCUCEFIxYaL7bwfASLzzW0lebylus",
        authDomain: "sanberapp-f76cf.firebaseapp.com",
        projectId: "sanberapp-f76cf",
        storageBucket: "sanberapp-f76cf.appspot.com",
        messagingSenderId: "460268798434",
        appId: "1:460268798434:web:d8f657f7bbfc0d70db79bb",
     };
     if(!firebase.apps.length){
         firebase.initializeApp(firebaseConfig)
     }
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      
     

      const submit=()=>{
          const data = {
              email,
              password
          }
        //   console.log(data)
          firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
              console.log("berhasil login");
              navigation.navigate('MyTabs')
          }).catch(()=>{
              if(!email||!password){
                  alert('Email dan Passwod tidak boleh kosong')
              }
              console.log("Login gagal")
              
          })
      }
    return (
        <View style={styles.container}>
            <View style={{alignItems:'center', marginBottom:20}}>
                <View>
                    <Text style={{
                        fontSize:25,
                        textAlign:'center',
                        fontWeight:'bold'
                    }}>Selamat Datang Kembali</Text>
                </View>
                <View style={{marginTop:50}}>
                    <Image source={require('../img/Logo_login_update.png')}/>
                </View>
                
            </View>
            <View style={{
                alignItems:'center'
            }}>
                <TextInput 
                    style={styles.input}
                    placeholder="Masukkan Email"
                    value={email}
                    onChangeText={(value)=>setEmail(value)}

                />
                <TextInput 
                    style={styles.input}
                    placeholder="Masukan Password" secureTextEntry={true}
                    value={password}
                    onChangeText={(value)=>setPassword(value)}
                    secureTextEntry
                />
                {/* <Button onPress={submit} title="Login"/> */}
                <View style={{margin:5}}>
                    <TouchableOpacity onPress={submit} title="Login"
                        style={{
                            backgroundColor:'#003A74', 
                            paddingVertical:8,
                            paddingHorizontal:15, 
                            marginBottom:0,
                            borderRadius:8
                        }}>
                        <Text style={{color:'#FFFFFF', textAlign:'center'}}>Login</Text>
                    </TouchableOpacity>
                </View>  
                <View style={{flexDirection:'row', justifyContent:'space-between',marginTop: 20}}>
                    
                        <Text style={{color:'#000000'}}>Anda Belum Memiliki Akun ? </Text>
                        <TouchableOpacity
                        onPress={()=>navigation.navigate("Register")}>
                            <Text style={{color:'#130f40'}}>Daftar</Text>
                        </TouchableOpacity>
                    
                </View>  
                
                
            </View>
                
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // alignItems:'center',
        // justifyContent:'center',
        backgroundColor:'#67C5E5'
    },
    input:{
        borderWidth:1,
        borderColor:'grey',
        paddingHorizontal:10,
        paddingVertical: 10,
        width: 300,
        marginBottom: 10,
        borderRadius: 10,
        marginTop: 10,
        backgroundColor:'#FFF'
    }
})
