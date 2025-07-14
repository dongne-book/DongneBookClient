import colors from '@/assets/colors/color';
import BirthDateSelector from '@/components/MakeUI/BirthdatInput';
import DuplicateCheck from '@/components/MakeUI/DuplicateCheck';
import { useRouter } from 'expo-router';
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
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [birth, setBirth] = useState('');

  const [pw, setPw] = useState<boolean>(true);

  const handleLogin = () => {
    if (email && password) {
      Alert.alert('Login Success', `Welcome, ${email}!`);
    } else {
      Alert.alert('Error', 'Please enter email and password.');
    }
  };

  const pwCheck = () => {
    if (password != passwordCheck) {
      setPw(false);
    } else {
      setPw(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>이메일로 가입하기</Text>
      </View>
      <View style={styles.inputBox}>
        <Text>이메일</Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder="이메일을 입력해주세요"
            placeholderTextColor="gray"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <DuplicateCheck />
        </View>
        <Text>비밀번호</Text>
        <TextInput
          style={styles.input}
          placeholder="비밀번호 입력(문자, 숫자, 특수문자 포함 8~20자)"
          placeholderTextColor="gray"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <View style={{ flexDirection: 'row' }}>
          <Text>비밀번호 확인</Text>
          {!pw && (
            <Text style={{ color: 'red', marginLeft: 6 }}>
              ※비밀번호가 옳바르지 않습니다
            </Text>
          )}
        </View>

        <TextInput
          style={[styles.input, { borderColor: pw ? '#ccc' : 'red' }]}
          placeholder="비밀번호 재입력"
          placeholderTextColor="gray"
          value={passwordCheck}
          onChangeText={setPasswordCheck}
          secureTextEntry
          onBlur={pwCheck}
        />
        <Text>이름</Text>
        <TextInput
          style={styles.input}
          placeholder="이름을 입력해주세요"
          placeholderTextColor="gray"
          value={name}
          onChangeText={setName}
        />
        <Text>전화번호</Text>
        <TextInput
          style={styles.input}
          placeholder="휴대폰 번호 입력(‘-’ 제외 11자리 입력)"
          placeholderTextColor="gray"
          value={phone}
          onChangeText={setPhone}
        />
        <BirthDateSelector setBirth={setBirth} />
      </View>
      <View style={{}}>
        <TouchableOpacity
          style={styles.localButton}
          onPress={() => router.push('/singup-recommand/profile')}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>회원가입</Text>
        </TouchableOpacity>
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
    flex: 4.5,
  },
  input: {
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
    fontSize: 16,
  },
  localButton: {
    height: 32,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
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
