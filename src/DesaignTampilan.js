import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class DesaignTampilan extends Component {
    render() {
        return (
            <View style= {styles.container}>
                <Text style= {styles.title}> Belajar Design Tampilan & Flexbox </Text>
                <View style= {styles.garis}/>


                {/*isi */}
                <View style= {styles.isi}>
                    <Text>fLexDirection Row (Vertikal)</Text>
                    <View style= {styles.flexVertical}>
                        <View style= {styles.kotakMerah}/>
                        <View style= {styles.kotakBiru}/>
                        <View style= {styles.kotakKuning}/>                   
                    </View>

                    <Text>fLexDirection Coloumn (Horizontal)</Text>
                    <View>{/*secara default udah horizontal, jadi ga perlu atur css */}
                        <View style= {styles.kotakMerah}/>
                        <View style= {styles.kotakBiru}/>
                        <View style= {styles.kotakKuning}/>                   
                    </View>
                    <Text>Justify Content</Text>
                    <View style= {{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style= {styles.kotakMerah}/>
                        <View style= {styles.kotakBiru}/>
                        <View style= {styles.kotakKuning}/>                   
                    </View>
                    <Text>Align Item</Text>
                    <View style= {{flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center'}}>
                        <View style= {styles.kotakMerah}/>
                        <View style= {styles.kotakBiru}/>
                        <View style= {styles.kotakKuning}/>                   
                    </View>
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
            marginTop: 10

        },
        isi: {marginTop: 10
        },
        flexVertical: {
            flexDirection: 'row'
        },
        kotakBiru: {
            marginTop: 5,
            width: 50,
            height: 20,
            backgroundColor: 'blue'
        },
        kotakMerah: {
            marginTop: 5,
            width: 50,
            height: 50,
            backgroundColor: 'red'
        },
        kotakKuning: {
            marginTop: 5,
            width: 50,
            height: 50,
            backgroundColor: 'yellow'
        }
})
