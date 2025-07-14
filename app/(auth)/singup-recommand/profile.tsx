import colors from '@/assets/colors/color';
import DuplicateCheck from '@/components/MakeUI/DuplicateCheck';
import GaugeBar from '@/components/MakeUI/GaugeBar';
import FontStyles from '@/components/styles/FontStyles';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
// import { MdOutlineEdit } from 'react-icons/md';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Profile = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [nickName, setNickName] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={FontStyles.subtitle}>프로필 설정</Text>
        <View style={{ marginTop: 12, margin: 12 }}>
          <GaugeBar progress={1} />
        </View>
      </View>
      <View style={styles.bodyImage}>
        <View style={[styles.profileBox]}>
          <View style={[styles.circle]}>
            <Image />
          </View>
          <TouchableOpacity style={styles.edit}>
            {/* <MdOutlineEdit /> */}
            <MaterialIcons name="edit" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bodyInput}>
        <Text style={FontStyles.inputText}>이름</Text>
        <TextInput
          style={styles.input}
          placeholder="이름을 입력해주세요"
          value={name}
          onChangeText={setName}
        />
        <Text style={FontStyles.inputText}>닉네임</Text>
        <View>
          <TextInput
            style={[styles.input, { width: '100%', marginRight: 10 }]}
            placeholder="공백없이 2 ~ 12 글자를 입력해주세요"
            value={nickName}
            onChangeText={setNickName}
          />
          <DuplicateCheck style={{ top: 10 }} />
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
          onPress={() => router.push('/(auth)/singup-recommand/preference')}
        >
          <Text style={{ fontSize: 16, fontWeight: 700, color: 'white' }}>
            다음
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
    flex: 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // Added for absolute positioning of edit
  },
  profileBox: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    borderRadius: 100,
    width: 100,
    height: 100,
    backgroundColor: colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  edit: {
    width: 40,
    height: 40,
    borderRadius: 20, // Changed from '50%' to 20 for React Native
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', // Make it overlap
    right: 0,
    bottom: 0,
  },
  bodyInput: {
    flex: 2.5,
    backgroundColor: 'white',
    padding: 16,
    gap: 8,
  },
  inputText: {
    fontSize: 15,
    fontWeight: '700',
  },
  input: {
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
    fontSize: 14,
  },
  next: {
    height: 60,
    borderRadius: 28,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Profile;
