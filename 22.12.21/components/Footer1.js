import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Footer = () => {

    const users = [
        {id:1,name:'John'},
        {id:2,name:'Mary'}
    ]

    return (
        <View>
            <Text style={styles.title}>Thai nichi institute of Technology</Text>
            {
                //loop to get result in array
                users.map((user,index)=>{
                    return <Text key={user.id}>{index+1} {user.name}</Text>
                })
            }
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    title: {
        fontSize:25,
    }
})
