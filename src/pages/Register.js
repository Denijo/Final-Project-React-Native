import React, {useState, useEffect} from 'react'
import { Button, StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import * as firebase from 'firebase';
// import { Image } from 'native-base';

export default function Register({navigation}) {
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
      const [nama, setNama] = useState("");
      

      const submit=()=>{
          const data = {
            nama,  
            email,
            password,
              
          }
          console.log(data)
          firebase.auth().createUserWithEmailAndPassword(email, password).then(()=>{
            console.log('Register Berhasil');
              navigation.navigate("Login");
          }).catch(()=>{
            if(!email||!password){
                alert('Data tidak boleh kosong')
            }
            console.log("register gagal")
            alert('Email atau Password salah')
          })
      }
    return (
        <KeyboardAvoidingView
        behavior = {Platform.OS =="ios"? "padding":"height"}
        style={styles.container}>

            <View style={styles.container}>
                <View style={{alignItems:'center', marginBottom:20}}>
                    <View>
                        <Text style={{
                            fontSize:25,
                            textAlign:'center',
                            fontWeight:'bold'
                        }}>Silahkan Isi Data Anda</Text>
                    </View>
                    <View style={{marginTop:30}}>
                        <Image source={require('../img/logo_register.png')}/>
                    </View>
                </View>
                <View style={{
                    alignItems:'center'
                }}>
                    <TextInput 
                        style={styles.input}
                        placeholder="Masukkan Nama Anda"
                        value={nama}
                        onChangeText={(value)=>setNama(value)}

                    />

                    <TextInput 
                        style={styles.input}
                        placeholder="Masukkan Email"
                        value={email}
                        onChangeText={(value)=>setEmail(value)}

                    />
                    <TextInput 
                        style={styles.input}
                        placeholder="Masukkan Password"
                        value={password}
                        onChangeText={(value)=>setPassword(value)}
                        secureTextEntry

                    />

                    <TextInput 
                        style={styles.input}
                        placeholder="Masukkan Ulang Password"
                        secureTextEntry
                        
                    />
                    <View>
                        <TouchableOpacity onPress={submit} title="REGISTER"style={{
                            backgroundColor:'#003A74',
                            paddingHorizontal:15,
                            paddingVertical:8,
                            borderRadius:8
                        }}>
                            <Text style={{color:'#fff'}}>Daftar</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between',marginTop: 20}}>
                        
                            <Text style={{color:'#000000'}}>Anda Sudah Memiliki Akun ? </Text>
                            <TouchableOpacity
                            onPress={()=>navigation.navigate("Login")}>
                                <Text style={{color:'#130f40'}}>Masuk</Text>
                            </TouchableOpacity>
                        
                    </View> 
                </View>             

            </View>
            
        </KeyboardAvoidingView>

    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
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
        backgroundColor:'#FFFFFF'
    }
})
