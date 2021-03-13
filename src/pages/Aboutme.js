import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const AboutPage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.imageForm}>
                    {/* <Text style={{
                        fontSize:24,
                        color:'#FFF',
                        fontWeight:'bold',
                        marginTop:5
                    }}>Profil</Text> */}
                    <Image style={styles.images} 
                    source={require('../img/profil.png')}/>
                    <Text style={{fontSize:20,
                        alignSelf:'center',
                        fontWeight:'bold',
                    }}>Deni Josua Samosir</Text>
                    <Text style={{fontSize:16,
                        alignSelf:'center',
                    }}>React Native Developer</Text>

                </View>
            </View>
            <View style ={styles.footer}>
                <Text style={styles.title}>Portofolio</Text>
                <View style={styles.kotakdalam}>
                    <View style={styles.iconText}>
                        <FontAwesome5 name={'gitlab'} size={40} style={{color:'#FC6D26'}}FC6D26/>
                        <Text>@Deni_Samosir</Text>
                    </View>
                    <View style={styles.iconText}>
                        <FontAwesome5 name={'github'} size={40}/>
                        <Text>@Deni_Samosir</Text>
                    </View>
                </View>
                <Text style={styles.title}>Social</Text>    
                <View style={styles.kotakkedua}>
                    <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                        <FontAwesome5 name={'linkedin'} size={40} style={{color:'#0A66C2'}}/>
                        <Text style={styles.socialTitle}>linkedin.com/in/denijosuasamosir</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}} >
                        <View style={styles.socialIcon}>
                            <FontAwesome5 name={'instagram'} size={40} style={{color:'#F10101'}}/>
                            <Text style={styles.socialTitle}>@Deni_Samosir</Text>
                        </View>
                        <View style={styles.socialIcon}>
                            <FontAwesome5 name={'twitter'}size={40} style={{color:'#50ABF1'}}/>
                            <Text style={styles.socialTitle}>@Deni_Samosir</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default AboutPage

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
        flex:1.5,
        backgroundColor:'#FFF',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal:20,
        paddingVertical:30
    },
    imageForm:{
        marginBottom:10,
        marginTop:100
    },
    images:{
        marginTop:5,
        alignSelf:'center',       
    },
    title:{
        fontSize:20,
        fontWeight:'bold'
    },
    iconText:{
        // flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:18,
        justifyContent:'space-evenly'
    },
    kotakdalam:{
        borderTopWidth:2,
        borderTopColor:'#67C5E5',
        flexDirection:'row',
        justifyContent:'space-around',
        paddingTop:20,
        paddingBottom:30
    },
    kotakkedua:{
        borderTopWidth:2,
        borderTopColor:'#67C5E5',
        paddingTop:30,
        justifyContent:'space-around'
    },
    socialIcon:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'flex-start',
        marginVertical:10
        

    },
    socialTitle:{
        justifyContent:'center',
        marginLeft:10
    },
    iconStyle:{
        color:'#F7DF1E'
    }

})
