import { RecommendProps } from '@/app/(auth)/recommend';
import colors from '@/assets/colors/color';
import FontStyles from '@/components/styles/FontStyles';
import { Link } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const topic = {
  '자연 힐링': '🌿',
  '도시 감성': '🏙',
  '느림의 미약': '🧘',
  '인생샷 명소': '📸',
  '맛있는 여행': '🍜',
  '예술 감성': '🎨',
  호캉스: '🛏',
  '모험 액티비티': '🧗',
  '지역 축제': '🎉',
};

const Preference = ({ step, setContent }: RecommendProps) => {
  const toggleItemInArray = (arr: string[], item: string): string[] => {
    return arr.includes(item) ? arr.filter((i) => i !== item) : [...arr, item];
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 4.5, backgroundColor: 'white', padding: 8 }}>
        <View style={{ alignItems: 'center' }}>
          <Text style={FontStyles.title}>관심있는 주제를</Text>
          <Text style={FontStyles.title}>모두 선택해주세요</Text>
        </View>
        <View style={{ alignItems: 'center', marginTop: 12, marginBottom: 12 }}>
          <Text style={FontStyles.content}>
            관심있는 주제를
            <Text style={{ color: colors.primary }}> 3가지</Text> 이상
            선택해주세요.
          </Text>
          <Text style={FontStyles.content}>
            내게 꼭 맞는 코스를 추천해드릴게요!
          </Text>
        </View>
        <View style={topicStyles.container}>
          {Object.entries(topic).map(([text, icon], index) => (
            <TouchableOpacity
              key={index}
              style={
                // ? [topicStyles.item, { backgroundColor: colors.primary }]
                topicStyles.item
              }
            >
              <View style={topicStyles.iconBox}>
                <Text style={topicStyles.icon}>{icon}</Text>
                <Text style={topicStyles.label}>{text}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
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

const topicStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  item: {
    width: 95,
    height: 95,
    margin: 8,
  },
  iconBox: {
    flex: 1,
    backgroundColor: colors.gray,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
  },
  icon: {
    fontSize: 30,
  },
  label: {
    marginTop: 4,
    fontSize: 12,
    textAlign: 'center',
  },
});
export default Preference;
