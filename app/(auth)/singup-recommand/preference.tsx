import colors from '@/assets/colors/color';
import GaugeBar from '@/components/MakeUI/GaugeBar';
import TopicGrid from '@/components/MakeUI/TopicGrid';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Preference = () => {
  const router = useRouter();
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

      <View style={{ flex: 6.5, backgroundColor: 'white', padding: 20 }}>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.title}>관심있는 주제를</Text>
          <Text style={styles.title}>모두 선택해주세요</Text>
        </View>
        <View style={{ alignItems: 'center', marginTop: 12, marginBottom: 12 }}>
          <Text style={styles.descreption}>
            관심있는 주제를
            <Text style={{ color: colors.primary }}>3가지</Text> 이상
            선택해주세요.
          </Text>
          <Text style={styles.descreption}>
            내게 꼭 맞는 코스를 추천해드릴게요!
          </Text>
        </View>
        <TopicGrid />
      </View>

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
          onPress={() => router.push('/singup-recommand/location')}
        >
          <Text style={{ fontSize: 16, fontWeight: 700, color: 'black' }}>
            이전
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.next}
          onPress={() => router.push('/singup-recommand/preference')}
        >
          <Text style={{ fontSize: 16, fontWeight: 700, color: 'white' }}>
            동네Book 시작하기
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
  next: {
    width: '45%',
    height: '80%',
    borderRadius: 28,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
  },
  descreption: {},
});

export default Preference;
