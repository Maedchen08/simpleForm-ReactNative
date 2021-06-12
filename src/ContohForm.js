import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Alert } from 'react-native'

export default class ContohForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username:'',
            password:'',
            isLogin: false
        }      
    }

    login = () => {
        if(!this.state.username && !this.state.password) {
            Alert.alert("Error","Username and password may not be empty")
        } else {
            this.setState({
                isLogin: true
            })
        }      
    }
    
    render() {
        const { username, password, isLogin } = this.state;
        return (
            <View style= {styles.container}>
                <Text style= {styles.title}> Form Login </Text>
                <View style= {styles.garis}/>

                {/*isi */}
                <View style= {styles.isi}>
                    <View style= {styles.wrapperInput}>
                        <Text>Username :</Text>
                        <TextInput style= 
                        {styles.textInput}
                        placeholder="Input Username"
                        value={username}
                        onChangeText={(username) => this.setState({username})}
                        />
                    </View>     
                    <View style={styles.wrapperInput}>
                        <Text>Password :</Text>
                        <TextInput style= 
                        {styles.textInput}
                        placeholder="Input Password"
                        value={password}
                        onChangeText={(password) => this.setState({password})}
                        secureTextEntry={true}
                        />
                    </View> 

                    <TouchableOpacity style={styles.buttonLogin} onPress={()=>this.login()}>
                    <Text style={styles.textButtonLogin}>Login</Text>
                    </TouchableOpacity>
                    
                    {isLogin && 
                        <Text style={{marginTop: 20}}>
                            Login Success : {username}
                        </Text>

                    }


                </View>
            </View>
          )
    }
}

const styles = StyleSheet.create({
        container: {padding:30},
        title: {
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
        },
        garis: {
            borderBottomWidth: 1,
            marginTop: 10,
           

        },
        isi: {
            marginTop: 30
        },
        textInput: {
            marginTop: 5,
            borderWidth: 1,
            padding: 10,
            borderColor: 'grey',
            borderRadius: 6,
            height: 40,
            width: 250
        },
        wrapperInput: {
            marginTop: 5,
        },
        buttonLogin: {
            marginTop: 15,
            marginLeft:90,
            justifyContent:'center',
            backgroundColor: 'skyblue',
            padding: 10,
            borderRadius: 10,
            width: 100
        },
        textButtonLogin: {
            textAlign: 'center',
            fontWeight: 'bold'
        }
})
