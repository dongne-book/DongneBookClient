import colors from '@/assets/colors/color';
import { Separator } from '@/components/MakeUI/Separator';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
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
          <Link href="/(auth)/recommend" asChild>
            <TouchableOpacity style={styles.localButton}>
              <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/(auth)/signUp" asChild>
            <TouchableOpacity style={styles.localButton}>
              <Text style={styles.buttonText}>SIGN UP</Text>
            </TouchableOpacity>
          </Link>
        </View>

        <Separator />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => Alert.alert('Button Pressed')}
          >
            <Image
              source={{
                uri: 'https://images.icon-icons.com/2429/PNG/512/google_logo_icon_147282.png',
              }}
              style={{ width: '100%', height: '100%' }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => Alert.alert('Button Pressed')}
          >
            <Image
              source={{
                uri: 'data:image/png;base64,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',
              }}
              style={{ width: '90%', height: '90%' }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => Alert.alert('Button Pressed')}
          >
            <Ionicons name="logo-apple" size={30} color="black" />
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
  localButton: {
    height: 32,
    backgroundColor: colors.primary,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  loginButton: {
    width: 56,
    height: 56,
    borderRadius: '50%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 24,
    margin: 4,
  },
});
