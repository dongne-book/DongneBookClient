import colors from '@/assets/colors/color';
import { Separator } from '@/components/MakeUI/Separator';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { RiKakaoTalkFill } from 'react-icons/ri';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Replace with your authentication logic
    if (email && password) {
      Alert.alert('Login Success', `Welcome, ${email}!`);
    } else {
      Alert.alert('Error', 'Please enter email and password.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>동네Book</Text>
      </View>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <View style={{ justifyContent: 'space-around', gap: 8 }}>
          <Button
            color={colors.primary}
            title="Login"
            onPress={() => router.push('./singup-recommand/profile')}
          />
          <Button
            color={colors.primary}
            title="Sign Up"
            onPress={handleLogin}
          />
        </View>
        <Separator />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 24,
          }}
        >
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => Alert.alert('Button Pressed')}
          >
            <FcGoogle size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => Alert.alert('Button Pressed')}
          >
            <RiKakaoTalkFill size={30} color="yellow" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => Alert.alert('Button Pressed')}
          >
            <FaApple size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 32,
    textAlign: 'center',
  },
  inputBox: {
    flex: 1,
  },
  input: {
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
    fontSize: 16,
  },
  loginButton: {
    width: 56,
    height: 56,
    borderRadius: '50%',
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 24,
    margin: 4,
  },
});
