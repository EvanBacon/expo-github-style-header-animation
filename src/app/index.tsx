import { useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { View } from "react-native";
import { interpolate, useAnimatedStyle } from "react-native-reanimated";
import Animated, {
  useAnimatedRef,
  useScrollViewOffset,
} from "react-native-reanimated";

import { HeaderTitle, HeaderTitleProps } from "@react-navigation/elements";

export default function Page() {
  const ref = useAnimatedRef();
  const scroll = useScrollViewOffset(ref);
  const navigation = useNavigation();
  const headerStyle = useAnimatedStyle(
    () => ({
      transform: [
        { translateY: interpolate(scroll.value, [0, 100], [50, 0], "clamp") },
      ],
    }),
    []
  );

  useEffect(() => {
    navigation.setOptions({
      headerTitle(props: HeaderTitleProps) {
        return (
          <View
            style={{
              overflow: "hidden",
              paddingBottom: 9,
              marginBottom: -9,
            }}
          >
            <Animated.View style={headerStyle}>
              <HeaderTitle {...props} />
            </Animated.View>
          </View>
        );
      },
    });
  }, [scroll]);

  return (
    <Animated.ScrollView ref={ref}>
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
