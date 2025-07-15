import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import {
    SafeAreaView
} from "react-native-safe-area-context";

export default function HomeScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
//   const insets = useSafeAreaInsets();
  const width = Dimensions.get("window").width;

  return (
    <SafeAreaView style={{ flex: 1, padding: 20, backgroundColor: "#fff" }}>
      <Carousel
        loop        // 무한 반복
        width={width}       // 슬라이드 너비
        height={250}        // 슬라이드 높이
        // mode="parallax"    // 슬라이드 모드
        autoPlay        // 자동 슬라이드
        autoPlayInterval={3000}
        data={[1, 2, 3]}
        scrollAnimationDuration={1000}      // 슬라이드 애니메이션 시간
        onSnapToItem={(index) => setCurrentIndex(index)}
        renderItem={({ index }) => (
          <View style={[styles.book, { backgroundColor: ["#FFA07A", "#20B2AA", "#9370DB"][index % 3] }]}>
            <Text
              style={{ color: "#808080", fontSize: 24, textAlign: "center" }}
            >
              동네Book
            </Text>
            {/* You can add an image here if needed */}
            <Text
              style={{ color: "#808080", fontSize: 18, textAlign: "center" }}
            >
              Welcome to 동네Book!
            </Text>
          </View>
        )}
      />
      <View style={styles.indicatorContainer}>
        {[1, 2, 3].map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentIndex === index && styles.activeIndicator,
            ]}
          />
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    // backgroundColor removed
  },
  book: {
    flex: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },
  activeIndicator: {
    backgroundColor: "#808080",
  },
});
