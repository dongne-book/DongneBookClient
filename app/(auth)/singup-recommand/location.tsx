import colors from '@/assets/colors/color';
import Accordion from '@/components/MakeUI/AccordionWithCheck';
import GaugeBar from '@/components/MakeUI/GaugeBar';
import { useRouter } from 'expo-router';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const list = {
  수도권: {
    서울특별시: ['종로구', '강남구', '송파구', '마포구'],
    경기도: ['수원시', '성남시', '고양시', '용인시'],
    인천광역시: ['중구', '연수구', '남동구'],
  },
  강원권: {
    강원특별자치도: ['춘천시', '강릉시', '속초시', '원주시'],
  },
};

const Location = () => {
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
          <Text style={{ fontSize: 24, fontWeight: '700' }}>관심지역 설정</Text>
          <Text style={{ fontSize: 12, color: 'gray' }}>건너뛰기</Text>
        </View>

        <View style={{ marginTop: 12, margin: 12 }}>
          <GaugeBar progress={2} />
        </View>
      </View>

      <ScrollView style={{ flex: 6.5, backgroundColor: 'white', padding: 20 }}>
        {Object.entries(list).map(([region, cities]) => (
          <Accordion title={region} content={cities} />
        ))}
      </ScrollView>

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
          onPress={() => router.push('./profile')}
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

export default Location;
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
