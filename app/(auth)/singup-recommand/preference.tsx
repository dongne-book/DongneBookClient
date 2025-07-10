import colors from '@/assets/colors/color';
import GaugeBar from '@/components/MakeUI/GaugeBar';
import { useRouter } from 'expo-router';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Preference = () => {
  const router = useRouter();
  const { width, height } = Dimensions.get('window');
  const imageRadius = width / 3;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: '700' }}>취향 설정</Text>
          <Text style={{ fontSize: 12, color: 'gray' }}>건너뛰기</Text>
        </View>

        <View style={{ marginTop: 12, margin: 12 }}>
          <GaugeBar progress={3} />
        </View>
      </View>

      <View style={{ flex: 6.5, backgroundColor: 'white', padding: 20 }}></View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          width: '100%',
          backgroundColor: 'white',
          overflow: 'hidden',
          padding: 16,
          justifyContent: 'space-between',
        }}
      >
        <TouchableOpacity
          style={[styles.next, { backgroundColor: colors.gray }]}
          onPress={() => router.push('./location')}
        >
          <Text style={{ fontSize: 24, fontWeight: 700, color: 'black' }}>
            이전
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.next}
          onPress={() => router.push('./preference')}
        >
          <Text style={{ fontSize: 24, fontWeight: 700, color: 'white' }}>
            다음
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Preference;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  next: {
    width: '45%',
    height: '80%',
    borderRadius: 28,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
