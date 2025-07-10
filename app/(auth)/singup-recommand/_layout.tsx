// import { Tabs } from 'expo-router';
// import React from 'react';
// import { Platform } from 'react-native';

// import { HapticTab } from '@/components/HapticTab';
// import { IconSymbol } from '@/components/ui/IconSymbol';
// import TabBarBackground from '@/components/ui/TabBarBackground';
// import { Colors } from '@/constants/Colors';
// import { useColorScheme } from '@/hooks/useColorScheme';

// export default function RecommandLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//         headerShown: true,
//         tabBarButton: HapticTab,
//         tabBarBackground: TabBarBackground
//         tabBarStyle: Platform.select({
//           ios: {
//             position: 'absolute',
//           },
//           default: {},
//         }),
//       }}
//     >
//       <Tabs.Screen
//         name="profile"
//         options={{
//           title: '프로필 설정',
//           tabBarIcon: ({ color }) => (
//             <IconSymbol size={28} name="house.fill" color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="location"
//         options={{
//           title: '관심 지역 설정',
//           tabBarIcon: ({ color }) => (
//             <IconSymbol size={28} name="paperplane.fill" color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="preference"
//         options={{
//           title: '취향 설정',
//           tabBarIcon: ({ color }) => (
//             <IconSymbol size={28} name="star.fill" color={color} />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }
