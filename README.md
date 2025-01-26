# Expo Router GitHub-style header animation

Have the title scroll-in with the content like the GitHub app. This is pretty easy with the new Reanimated scrolling features.

https://github.com/user-attachments/assets/285b4435-401e-4533-84b6-90ca03ae2537

```js
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
```
