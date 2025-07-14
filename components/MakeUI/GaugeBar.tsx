import colors from '@/assets/colors/color';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type GaugeBarProps = {
  progress: number; // 0 ~ 100
};

const GaugeBar: React.FC<GaugeBarProps> = ({ progress }) => {
  const step = progress === 1 ? 0 : progress === 2 ? 50 : 100;
  return (
    <View style={styles.container}>
      {/* 배경 바 */}
      <View
        style={[styles.bar, { width: '100%', backgroundColor: colors.gray }]}
      />
      <View
        style={[
          styles.bar,
          { width: `${step}%`, backgroundColor: colors.primary },
        ]}
      />
      {/* 원들 */}
      <View style={styles.circlesContainer}>
        {[1, 2, 3].map((num) => (
          <View
            key={num}
            style={[
              styles.circle,
              {
                backgroundColor: num <= progress ? colors.primary : colors.gray,
              },
            ]}
          >
            <Text style={{ color: 'white' }}>{num}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    height: 50, // 원의 높이와 동일
    justifyContent: 'center',
  },
  bar: {
    position: 'absolute',
    height: 6,
    borderRadius: 20,
    top: '50%',
    marginTop: -5, // bar 높이 절반만큼 위로
  },
  circlesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  circle: {
    width: 36,
    height: 36,
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GaugeBar;
