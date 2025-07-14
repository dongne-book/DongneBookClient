import { RecommendProps } from '@/app/(auth)/recommend';
import colors from '@/assets/colors/color';
import TopicGrid from '@/components/MakeUI/TopicGrid';
import FontStyles from '@/components/styles/FontStyles';
import { Link } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Preference = ({ step }: RecommendProps) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 6.5, backgroundColor: 'white', padding: 20 }}>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.title}>관심있는 주제를</Text>
          <Text style={styles.title}>모두 선택해주세요</Text>
        </View>
        <View style={{ alignItems: 'center', marginTop: 12, marginBottom: 12 }}>
          <Text style={FontStyles.content}>
            관심있는 주제를
            <Text style={{ color: colors.primary }}>3가지</Text> 이상
            선택해주세요.
          </Text>
          <Text style={FontStyles.content}>
            내게 꼭 맞는 코스를 추천해드릴게요!
          </Text>
        </View>
        <TopicGrid />
      </View>

      <View style={styles.bodyStep}>
        <TouchableOpacity
          style={[styles.next, { backgroundColor: colors.gray }]}
          onPress={() => step(2)}
        >
          <Text style={{ fontSize: 16, fontWeight: 700, color: 'black' }}>
            이전
          </Text>
        </TouchableOpacity>
        <Link href="/(auth)/login" asChild>
          <TouchableOpacity style={styles.next}>
            <Text style={{ fontSize: 16, fontWeight: 700, color: 'white' }}>
              동네 Book시작하기
            </Text>
          </TouchableOpacity>
        </Link>
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

  title: {
    fontSize: 36,
    fontWeight: '700',
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
    position: 'absolute',
    bottom: 20,
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

export default Preference;
