import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    textTopStyle:{ 
        fontSize:25,
        fontWeight: 'bold',
        textAlign:'center',
        marginBottom:16,

    },
    textBottomStyle:{
        fontSize:16,
        textAlign:'center',
        color:'grey'

    },
    buttonStyle: {
        alignItems: 'center',
        backgroundColor: '#C9C9C9',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        marginTop: 15,
        paddingTop:10,
        width: '70%'
    },
    buttonTextStyle: {
        color: '#000000',
        marginBottom: 4,
    },
});

export {styles}