import {
  SymbolView as StandardSymbolView,
  SymbolViewProps,
  SymbolWeight,
} from "expo-symbols";
import { StyleProp, ViewStyle } from "react-native";

import { remapProps } from "nativewind";

const SymbolView = remapProps(StandardSymbolView, {
  className: {
    target: "style", // map className->style
  },
});

export function IconSymbol({
  name,
  size = 24,
  color,
  style,
  weight = "regular",
  animationSpec,
  className,
}: {
  name: SymbolViewProps["name"];
  size?: number;
  color: string;
  style?: StyleProp<ViewStyle>;
  weight?: SymbolWeight;
  animationSpec?: SymbolViewProps["animationSpec"];
  className?: string;
}) {
  return (
    <SymbolView
      weight={weight}
      tintColor={color}
      resizeMode="scaleAspectFit"
      animationSpec={animationSpec}
      name={name}
      size={size}
      style={style}
      className={className}
    />
  );
}
