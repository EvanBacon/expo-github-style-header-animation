import { IconSymbol } from "@/components/ui/icon-symbol";
import "../global.css";
import { Link, Tabs } from "expo-router";
import { HeaderButton } from "@/components/ui/header-button";
export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        title: "ACME",
        tabBarShowLabel: false,
        headerTitleAlign: "left",
        headerRight: () => (
          <Link href="/" asChild>
            <HeaderButton
              pressOpacity={0.7}
              style={{
                paddingHorizontal: 16,
                paddingVertical: 8,
                marginHorizontal: -8,
              }}
            >
              <IconSymbol name="ellipsis" size={20} color="black" />
            </HeaderButton>
          </Link>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size }) => (
            <IconSymbol name="house" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="products"
        options={{
          tabBarIcon: ({ color, size }) => (
            <IconSymbol name="cart" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
