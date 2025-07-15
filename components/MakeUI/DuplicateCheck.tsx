import colors from '@/assets/colors/color';
import React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

interface DuplicateCheckProps {
  style?: ViewStyle | ViewStyle[]; // 배열도 가능
}

const DuplicateCheck = ({ style }: DuplicateCheckProps) => {
  return (
    <TouchableOpacity
      style={[styles.duplicate, style]}
      onPress={() => Alert.alert('중복')}
    >
      <Text style={{ color: 'white' }}>중복확인</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  duplicate: {
    position: 'absolute',
    width: 70,
    height: 30,
    right: 8,
    top: 16,
    borderRadius: 8,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DuplicateCheck;
