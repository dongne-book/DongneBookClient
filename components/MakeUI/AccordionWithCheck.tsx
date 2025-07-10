import React, { useState } from 'react';
import {
  Animated,
  LayoutAnimation,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { Checkbox } from 'react-native-paper';

console.log('CheckBox:', Checkbox);

type AccordionItemProps = {
  title: string;
  content: string[];
};

const AccordionItem = ({ title, content }: AccordionItemProps) => {
  const [expanded, setExpanded] = useState(false);
  const [checked, setChecked] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  const maxH = content.length * 42;

  const toggleItem = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);

    Animated.timing(animation, {
      toValue: expanded ? 0 : 1,
      duration: 150,
      useNativeDriver: false,
    }).start();
  };

  const height = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, maxH], // 내용 영역의 높이에 따라 조절
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleItem} style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => setChecked(!checked)}
        />
      </TouchableOpacity>
      {expanded && (
        <Animated.View style={{ height }}>
          {content.map((val) => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingLeft: 16,
                paddingRight: 12,
              }}
            >
              <Text style={styles.content}>{val}</Text>
              <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => setChecked(!checked)}
              />
            </View>
          ))}
        </Animated.View>
      )}
    </View>
  );
};

type AccordionProps = {
  title: string;
  content: Object;
};

const Accordion = ({ title, content }: AccordionProps) => {
  return (
    <View>
      <Text>{title}</Text>
      {Object.entries(content).map(([key, val]) => (
        <AccordionItem title={key} content={val} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 6,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#f2f2f2',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    marginLeft: 8,
  },
  content: {
    padding: 12,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
});

export default Accordion;
