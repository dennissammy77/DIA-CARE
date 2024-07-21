import { setStorageItemAsync } from '@/hooks/useStorageState';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert, TouchableOpacity } from 'react-native';
import { SignInApi } from '../../api/auth.route';

interface Props{
  data?: any;
  response?: any;
  error?: any;
}
export default function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const data = {
    email: email,
    password: email,
  }

  const handleSignIn = () => {
    if (email && password) {
      
      Alert.alert('Success', `Email: ${email}\nPassword: ${password}`);

      // You can handle the form submission here (e.g., send the data to a backend server)
    } else {
      Alert.alert('Error', 'Please fill in all fields.');
    }
  };
  const onSubmit = async(data:Props) => {
    try {
      await SignInApi(data).then((response)=>{
          Alert.alert('Success', `Email: ${email}\nPassword: ${password}`);
          setStorageItemAsync('session',response?.data.token)
          if (typeof(window) === 'undefined') {
            router.replace(`/dashboard/stores`);
          }else{
            window.location.href =`/dashboard/stores`;
          }
          return ;
      }).catch((err)=>{
          return (
            Alert.alert('Error', 'err')
          )
      })
    } catch (error){
      Alert.alert('Error', 'error');
      return;
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign In" onPress={onSubmit} />
      <TouchableOpacity onPress={(()=>{router.push('/signup')})}>
        <Text style={styles.link}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  link: {
    marginTop: 20,
    color: 'blue',
    textAlign: 'center',
  },
});