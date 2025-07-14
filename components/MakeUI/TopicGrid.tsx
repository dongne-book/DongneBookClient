import colors from '@/assets/colors/color';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const topic = [
  { icon: '🌿', text: '자연 힐링' },
  { icon: '🏙', text: '도시 감성' },
  { icon: '🧘', text: '느림의 미약' },
  { icon: '📸', text: '인생샷 명소' },
  { icon: '🍜', text: '맛있는 여행' },
  { icon: '🎨', text: '예술 감성' },
  { icon: '🛏', text: '호캉스' },
  { icon: '🧗', text: '모험 액티비티' },
  { icon: '🎉', text: '지역 축제' },
];

const { width, height } = Dimensions.get('window');
// const topicSize = width * 0.25;
const topicSize = 95;

const TopicGrid = () => {
  return (
    <View style={styles.container}>
      {topic.map((item, index) => (
        <View key={index} style={styles.item}>
          <View style={styles.iconBox}>
            <Text style={styles.icon}>{item.icon}</Text>
            <Text style={styles.label}>{item.text}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  item: {
    width: topicSize,
    height: topicSize,
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

export default TopicGrid;
