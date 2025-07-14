import GaugeBar from '@/components/MakeUI/GaugeBar';
import Location from '@/components/MakeUI/recommend/location';
import Preference from '@/components/MakeUI/recommend/preference';
import Profile from '@/components/MakeUI/recommend/profile';
import FontStyles from '@/components/styles/FontStyles';
import { useState } from 'react';

import { StyleSheet, Text, View } from 'react-native';

export interface RecommendProps {
  step: (stage: number) => void;
  setContent?: React.Dispatch<React.SetStateAction<string[]>>;
}

const step: { [key: number]: string } = {
  1: '프로필 설정',
  2: '관심지역 설정',
  3: '취향 설정',
};

const Recommend = () => {
  const [stage, setStage] = useState<number>(1);
  const [profile, setProfile] = useState({ name: 'kim', nickName: '' });
  const [location, setLocation] = useState<string[]>([]);
  const [preference, setPreference] = useState<string[]>([]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.hearderText}>
          <Text style={FontStyles.subtitle}>{step[stage]}</Text>
          {stage >= 2 && (
            <Text style={{ fontSize: 12, color: 'gray' }}>건너뛰기</Text>
          )}
        </View>

        <View style={{ marginTop: 12, margin: 12 }}>
          <GaugeBar progress={stage} />
        </View>
      </View>
      <View style={styles.body}>
        {stage == 1 && (
          <Profile step={setStage} content={profile} setContents={setProfile} />
        )}
        {stage == 2 && <Location step={setStage} setContent={setLocation} />}
        {stage == 3 && (
          <Preference step={setStage} setContent={setPreference} />
        )}
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
  hearderText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  body: {
    flex: 5.5,
  },
});

export default Recommend;
