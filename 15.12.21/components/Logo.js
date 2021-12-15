import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Logo = () => {
    
    const title = "TNI"
    const isTitle = false;

    const showData =() =><Text>December</Text>

    return (
        <View>
            <Text style={{color:'blue',fontSize:20}}>ThaiNichi</Text>
            {
                // === help you check datatype
                isTitle === true && <Text>{title}</Text>
            }
            {
                isTitle === true //traditional
                ?<Text>{title}</Text> //if true
                :<Text>Thainichi</Text> //if false
            }
            {
                showData()
            }
        </View>
    )
}

export default Logo

const styles = StyleSheet.create({})
