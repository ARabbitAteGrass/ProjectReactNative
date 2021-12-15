import React,{useState,useEffect} from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Footer = () => {

    const [count,setCount] = useState(0);//const count = 0
    const [title,setTitle] = useState('Hello');
    
    //always contact everytime you run 
    useEffect (()=>{
        console.log('use effect 1')
    })

    //run 1 time |Ex.most use when contact backend 
    useEffect (()=>{
        console.log('use effect 2')
    },[])

    //run if var in [] change
    useEffect (()=>{
        console.log('use effect 3')
    },[title])

    return (
        <View>
            <Text style={styles.title}>Halo {count}</Text>
            <Button 
                title='Click me'
                onPress={()=>{
                    //setCount(5) //update count = 5
                    setCount(count+1) //update Count +1
                }}
            />
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    title: {
        fontSize:20,
    }
})
