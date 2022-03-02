import {StyleSheet, View, SafeAreaView} from 'react-native';
import React from 'react';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Icon,
} from 'native-base';
import axios from 'axios';
import {Formik, Field} from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userStoreContext } from '../context/UserContext';

const validateSchema = Yup.object().shape({
  email: Yup.string().email('Email ผิดพลาด').required('กรุณากรอก Email'),
  password: Yup.string()
    .min(4, 'ต้องมากกว่า 4 ตัวอักษร')
    .required('กรุณากรอกรหัสผ่าน'),
});

const RegisterScreen = ({navigation}) => {
  const userStore = React.useContext(userStoreContext);
  
  return (
    <Container>
      <Content padder>
        <Formik
          // the value name and startnig value
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={validateSchema}
          onSubmit={async values => {
            // same shape as initial values
            // console.log(values);
            // alert(JSON.stringify(values));
            try {
              const url = 'https://api.codingthailand.com/api/login';
              const res = await axios.post(url, {
                email: values.email,
                password: values.password,
              });
              //alert(JSON.stringify(res.data));
              //catch a token
              await AsyncStorage.setItem('@token',JSON.stringify(res.data));
              //get profile
              const urlProfile = 'https://api.codingthailand.com/api/profile';
              const resProfile = await axios.get(urlProfile,{
                headers:{
                  Authorization : 'Bearer '+res.data.access_token

                }

              });
              //alert(JSON.stringify(resProfile.data.data.user));
              //save profile data to AsyncStorage
              await AsyncStorage.setItem('@profile',JSON.stringify(resProfile.data.data.user));

              //get and update profile
              const profile = await AsyncStorage.getItem('@profile');
              userStore.updateProfile(JSON.parse(profile));

              alert('Login Successful');
              navigation.navigate('Home');

            } catch (error) {
              alert(error.response.data.message);
            }
          }}>
          {/*errors is for validating, touched is for when component is unclicked*/}
          {({
            errors,
            touched,
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setSubmitting,
          }) => (
            <Form>
              <Item
                fixedLabel
                last
                error={errors.email && touched.email ? true : false}>
                <Label>Email</Label>
                <Input
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  keyboardType="email-address"
                />
                {errors.email && touched.email && <Icon name="close-circle" />}
              </Item>
              {errors.email && touched.email && (
                <Item>
                  <Label style={{color: 'red'}}>{errors.email}</Label>
                </Item>
              )}
              <Item
                fixedLabel
                last
                error={errors.password && touched.password ? true : false}>
                <Label>Password</Label>
                <Input
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  secureTextEntry={true}
                />
                {errors.password && touched.password && (
                  <Icon name="close-circle" />
                )}
              </Item>
              {errors.password && touched.password && (
                <Item>
                  <Label style={{color: 'red'}}>{errors.password}</Label>
                </Item>
              )}
              <Button
                block
                large
                style={{marginTop: 30, backgroundColor: '#f75d59'}}
                onPress={() => {
                  handleSubmit();
                }}
                // If submitted, disable button
                disabled={isSubmitting}>
                
                <Text
                  style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                  Login
                </Text>
              </Button>
            </Form>
          )}
        </Formik>
      </Content>
    </Container>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});