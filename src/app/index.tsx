import { Tabs } from "expo-router";
import React from "react";
import { View } from "react-native";
import { interpolate, useAnimatedStyle } from "react-native-reanimated";
import Animated, {
  useAnimatedRef,
  useScrollViewOffset,
} from "react-native-reanimated";

import { HeaderTitle } from "@react-navigation/elements";

export default function Page() {
  const ref = useAnimatedRef();
  const scroll = useScrollViewOffset(ref);
  const style = useAnimatedStyle(() => ({
    transform: [
      { translateY: interpolate(scroll.value, [0, 100], [50, 0], "clamp") },
    ],
  }));

  return (
    <Animated.ScrollView ref={ref}>
      <Tabs.Screen
        options={{
          headerTitle: (props) => (
            <View
              style={{ overflow: "hidden", paddingBottom: 9, marginBottom: -9 }}
            >
              <Animated.View style={style}>
                <HeaderTitle {...props} />
              </Animated.View>
            </View>
          ),
        }}
      />
      <Content />
    </Animated.ScrollView>
  );
}

function Content() {
  return (
    <View className="flex-1">
      <View className="py-4 xl:py-48">
        <View className="px-4 md:px-6">
          <View className="flex flex-col gap-4 text-center">
            <View className="flex-1 rounded-lg aspect-video bg-slate-300" />
            <View className="flex-1 rounded-lg aspect-video bg-slate-300" />
            <View className="flex-1 rounded-lg aspect-video bg-slate-300" />
            <View className="flex-1 rounded-lg aspect-video bg-slate-300" />
          </View>
        </View>
      </View>
    </View>
  );
}
