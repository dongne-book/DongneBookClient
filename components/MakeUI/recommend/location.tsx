import { RecommendProps } from '@/app/(auth)/recommend';
import colors from '@/assets/colors/color';
import Accordion from '@/components/MakeUI/AccordionWithCheck';
import {
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

const Location = ({ step, setContent }: RecommendProps) => {
  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 4.5, backgroundColor: 'white', padding: 20 }}>
        {Object.entries(list).map(([region, cities], index) => (
          <Accordion title={region} content={cities} key={index} />
        ))}
      </ScrollView>

      <View style={styles.bodyStep}>
        <TouchableOpacity
          style={[styles.next, { backgroundColor: colors.gray }]}
          onPress={() => step(1)}
        >
          <Text style={{ fontSize: 16, fontWeight: 700, color: 'black' }}>
            이전
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.next} onPress={() => step(3)}>
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
  bodyStep: {
    flex: 1,
    height: 100,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'white',
    overflow: 'hidden',
    padding: 16,
    justifyContent: 'space-between',
  },
  next: {
    width: '45%',
    height: 60,
    borderRadius: 28,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Location;
