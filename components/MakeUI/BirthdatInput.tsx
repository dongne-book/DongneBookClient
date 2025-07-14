import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  setBirth: (birth: string) => void;
}

const BirthDateSelector = ({ setBirth }: Props) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i); // 최근 100년
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(1);
  const [day, setDay] = useState(1);

  return (
    <View>
      <Text>생년월일</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={year}
          style={styles.picker}
          onValueChange={setYear}
        >
          {years.map((y) => (
            <Picker.Item key={y} label={`${y}년`} value={y} />
          ))}
        </Picker>
        <Picker
          selectedValue={month}
          style={styles.picker}
          onValueChange={setMonth}
        >
          {months.map((m) => (
            <Picker.Item key={m} label={`${m}월`} value={m} />
          ))}
        </Picker>
        <Picker
          selectedValue={day}
          style={styles.picker}
          onValueChange={setDay}
        >
          {days.map((d) => (
            <Picker.Item key={d} label={`${d}일`} value={d} />
          ))}
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pickerContainer: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
  picker: { flex: 1, borderRadius: 4, height: 36 },
});

export default BirthDateSelector;
