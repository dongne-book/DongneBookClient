import colors from '@/assets/colors/color';
import GaugeBar from '@/components/MakeUI/GaugeBar';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { MdOutlineEdit } from 'react-icons/md';
import {
  Button,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Profile = () => {
  const router = useRouter();
  const { width, height } = Dimensions.get('window');
  const imageRadius = width / 3;
  const [name, setName] = useState('');
  const [nickName, setNickName] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 24, fontWeight: '700' }}>프로필 설정</Text>
        <View style={{ marginTop: 12, margin: 12 }}>
          <GaugeBar progress={1} />
        </View>
      </View>
      <View style={styles.bodyImage}>
        <View
          style={[styles.circle, { width: imageRadius, height: imageRadius }]}
        >
          <Image />
        </View>
        <TouchableOpacity style={styles.edit}>
          <MdOutlineEdit />
        </TouchableOpacity>
      </View>
      <View style={styles.bodyInput}>
        <Text style={styles.inputText}>이름</Text>
        <TextInput
          style={[styles.input, { marginTop: 8 }]}
          placeholder="이름을 입력해주세요"
          value={name}
          onChangeText={setName}
        />
        <Text style={styles.inputText}>닉네임</Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <TextInput
            style={[styles.input, { width: '100%', marginRight: 10 }]}
            placeholder="공백없이 2 ~ 12 글자를 입력해주세요"
            value={nickName}
            onChangeText={setNickName}
          />
          <View
            style={{
              borderRadius: 8,
              overflow: 'hidden',
              position: 'relative',
              marginBottom: 12,
            }}
          >
            <Button title="중복확인" color={colors.primary} />
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          overflow: 'hidden',
          padding: 16,
        }}
      >
        <TouchableOpacity
          style={styles.next}
          onPress={() => router.push('./location')}
        >
          <Text style={{ fontSize: 24, fontWeight: 700, color: 'white' }}>
            다음
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  bodyImage: {
    flex: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    borderRadius: '50%',
    backgroundColor: colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  edit: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: -40,
    marginRight: -120,
  },
  bodyInput: {
    flex: 2.5,
    backgroundColor: 'white',
    padding: 16,
  },
  inputText: {
    fontSize: 20,
    fontWeight: 700,
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
  next: {
    height: '80%',
    borderRadius: 28,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
