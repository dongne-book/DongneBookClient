import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { IconButton } from "react-native-paper";
import Carousel from "react-native-reanimated-carousel";

export default function HomeScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  //   const width = Dimensions.get("window").width;
  const { width } = useWindowDimensions();
  const carouselWidth = width - 40; // 패딩 20씩 양쪽에 적용

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>
      <ScrollView
        style={styles.safeArea}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.carouselContainer}>
          <Carousel
            autoPlayInterval={3000}
            data={[1, 2, 3]}
            loop={true}
            height={450}
            width={carouselWidth}
            style={styles.carousel}
            mode="parallax"
            modeConfig={{
              parallaxScrollingScale: 0.9,
              parallaxScrollingOffset: 50,
            }}
            autoPlay={true}
            scrollAnimationDuration={1000}
            onSnapToItem={(index) => setCurrentIndex(index)}
            renderItem={({ index }) => (
              <View
                style={[
                  styles.book,
                  {
                    backgroundColor: ["#FFE4E1", "#E0FFFF", "#E6E6FA"][index % 3],
                  },
                ]}
              >
                <Text style={styles.carouselTitle}>동네Book</Text>
                <Text style={styles.carouselSubtitle}>
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
        </View>

        <View style={styles.postContainer}>
          <View style={styles.userInfoContainer}>
            <View style={styles.userInfo}>
              <Image
                source={{
                  uri: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
                }}
                style={styles.profileImage}
              />
              <View>
                <Text style={styles.username}>신현성</Text>
                <Text style={styles.location}>위치</Text>
              </View>
            </View>
            <IconButton
              size={24}
              icon={bookmarked ? "bookmark" : "bookmark-outline"}
              iconColor={bookmarked ? "#FFD700" : "#666"}
              onPress={() => setBookmarked(!bookmarked)}
              style={styles.bookmarkButton}
            />
          </View>
          <View style={styles.divider} />

          <View style={styles.postContent}>
            <Text style={styles.postTitle}>제목</Text>
            <Text style={styles.postDescription}>오늘 날씨 좋아용</Text>
          </View>

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.imageScrollView}
          >
            <View style={styles.imageContainer}>
              {[1, 2, 3].map((_, index) => (
                <Image
                  key={index}
                  source={{
                    uri: "https://t1.daumcdn.net/brunch/service/user/cnoC/image/6asksi-WwMQVZPvPre-081XMhO4",
                  }}
                  style={styles.postImage}
                />
              ))}
            </View>
          </ScrollView>

          <Text style={styles.hashtags}>
            #동네Book #독서 #책스타그램
          </Text>

          <IconButton
            size={24}
            icon={liked ? "heart" : "heart-outline"}
            iconColor={liked ? "#FF6B6B" : "#666"}
            onPress={() => setLiked(!liked)}
            style={styles.likeButton}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FAFAFA", // 배경색 밝게 수정
  },
  scrollViewContent: {
    gap: 28,
    paddingBottom: 24,
  },
  carouselContainer: {
    marginBottom: 24,
  },
  carousel: {
    width: "100%",
    alignSelf: "center",
  },
  book: {
    flex: 1,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  carouselTitle: {
    fontSize: 32,
    fontWeight: "700",
    color: "#333",
    marginBottom: 16,
    letterSpacing: -0.5,
  },
  carouselSubtitle: {
    fontSize: 20,
    color: "#555",
    letterSpacing: -0.3,
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#DDD",
    marginHorizontal: 4,
  },
  activeIndicator: {
    backgroundColor: "#666",
    width: 24,
  },
  postContainer: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 7,
  },
  userInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2.5,
    borderColor: "#e8e8e8",
  },
  username: {
    fontSize: 17,
    fontWeight: "600",
    color: "#222",
    letterSpacing: -0.3,
  },
  location: {
    fontSize: 14,
    color: "#777",
    marginTop: 3,
  },
  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 16,
  },
  postContent: {
    marginBottom: 18,
  },
  postTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 6,
    letterSpacing: -0.5,
  },
  postDescription: {
    fontSize: 15,
    color: "#555",
    lineHeight: 22,
    letterSpacing: -0.3,
  },
  imageScrollView: {
    marginVertical: 14,
  },
  imageContainer: {
    flexDirection: "row",
    gap: 14,
  },
  postImage: {
    height: 200,
    width: 200,
    borderRadius: 16,
  },
  hashtags: {
    fontSize: 14,
    color: "#1E88E5",
    marginTop: 10,
    letterSpacing: -0.2,
  },
  bookmarkButton: {
    margin: 0,
  },
  likeButton: {
    margin: 0,
    alignSelf: "flex-start",
    marginTop: 4,
  },
});
