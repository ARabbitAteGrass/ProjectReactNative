import {StyleSheet, View, ScrollView} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';

import { Container, Header, Content, Button, ListItem, Text, Icon, Left, Body, Right, Switch } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { userStoreContext } from '../context/UserContext';

const MenuScreen = ({navigation}) => {

  //const [profile,setProfile] = React.useState(null);
  const userStore = useContext(userStoreContext);
  useEffect(()=>{
    const getProfile = async () =>{
      const profile = await AsyncStorage.getItem('@profile')
      if(profile!= null){
        userStore.updateProfile(JSON.parse(profile));
        //setProfile(JSON.parse(profile));
      }
    };
    getProfile();
  },[]);

  return (
    <ScrollView style={{flex: 1}}>
      <View style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:undefined,
        height:100
      }}>
        <Text
          style={{
            color: '#fa8072',
            fontSize: 20,
            fontWeight: 'bold',
            padding: 20,
          }}>
          Main Menu
        </Text>
        {/* profile data appear under Main Menu */}
        {
          userStore.profile && (
            <>
            <Text style={{
              color: '#f75d59',
              fontSize: 15,
              fontWeight: 'bold',
            }}>
              Welcome {userStore.profile.name} Sama
            </Text>

            <Text style={{
              color: '#fa8072',
              fontSize: 15,
              fontWeight: 'bold',
            }}>
              Email: {userStore.profile.email}
            </Text>
            </>
          )
        }
      </View>
        {/* Native base code starts here */}
        <Content>
          {/* Home Page */}
          <ListItem
            icon
            style={{marginBottom: 10, marginTop: 10}}
            onPress={() => {
              navigation.navigate('HomeStack');
            }}>
            <Left>
              <Button style={{backgroundColor: '#FF9501'}}>
                <Icon active name="home" />
              </Button>
            </Left>
            <Body>
              <Text>Home Page</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          {/* Product Page */}
          <ListItem
            icon
            onPress={() => {
              navigation.navigate('ProductStack');
            }}>
            <Left>
              <Button style={{backgroundColor: '#007AFF'}}>
                <Icon active name="archive-outline" />
              </Button>
            </Left>
            <Body>
              <Text>Product</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          {
            !userStore.profile && (
              /* Login Page */
                <ListItem
                  icon
                  onPress={() => {
                    navigation.navigate('Login');
                  }}>
                  <Left>
                    <Button style={{backgroundColor: '#fa8072'}}>
                      <Icon active name="log-in" />
                    </Button>
                  </Left>
                  <Body>
                    <Text>Login</Text>
                  </Body>
                  <Right>
                    <Icon active name="arrow-forward" />
                  </Right>
                </ListItem>
            )
          }
          {
            userStore.profile && (
              /* Logout Page */
                <ListItem 
                  icon
                  onPress={ async ()=>{
                    await AsyncStorage.removeItem('@token');
                    await AsyncStorage.removeItem('@profile'); 
                    userStore.updateProfile(null);
                    alert('Logout Successful');
                    navigation.closeDrawer();
                  }}>
                  <Left>
                    <Button style={{backgroundColor: 'red'}}>
                      <Icon active name="log-out" />
                    </Button>
                  </Left>
                  <Body>
                    <Text>Logout</Text>
                  </Body>
                  <Right>
                    <Icon active name="arrow-forward" />
                  </Right>
                </ListItem>
            )
          }
        </Content>
      
    </ScrollView>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({});