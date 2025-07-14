import { RecommendProps } from '@/app/(auth)/recommend';
import colors from '@/assets/colors/color';
import DuplicateCheck from '@/components/MakeUI/DuplicateCheck';
import FontStyles from '@/components/styles/FontStyles';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface Content {
  name: string;
  nickName: string;
}

interface ProfileProps extends RecommendProps {
  content: Content;
  setContents: (content: Content) => void;
}

const Profile = ({ step, content, setContents }: ProfileProps) => {
  const nickNameDuplicateCheck = async () => {
    try {
    } catch {}
  };

  return (
    <View style={styles.container}>
      <View style={styles.bodyImage}>
        <View style={[styles.profileBox]}>
          <View style={[styles.circle]}>
            <Image />
          </View>
          <TouchableOpacity style={styles.edit}>
            <MaterialIcons name="edit" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bodyInput}>
        <Text style={FontStyles.inputText}>이름</Text>
        <TextInput
          style={styles.input}
          placeholder="이름을 입력해주세요"
          value={content.name}
          onChangeText={(text) => setContents({ ...content, name: text })}
        />
        <Text style={FontStyles.inputText}>닉네임</Text>
        <View>
          <TextInput
            style={[styles.input, { width: '100%', marginRight: 10 }]}
            placeholder="공백없이 2 ~ 12 글자를 입력해주세요"
            value={content.nickName}
            onChangeText={(text) => setContents({ ...content, nickName: text })}
          />
          <DuplicateCheck style={{ top: 10 }} />
        </View>
      </View>
      <View style={styles.bodyStep}>
        <TouchableOpacity style={styles.next} onPress={() => step(2)}>
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
  bodyStep: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    overflow: 'hidden',
    padding: 16,
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
