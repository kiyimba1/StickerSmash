import { Image, View } from "react-native";
import Animated, {useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
export default function EmojiSticker({imageSize, stickerSource}){
    const scaleImage = useSharedValue(imageSize);

    const imageStyle = useAnimatedStyle(()=>{
        return {
            width: withSpring(scaleImage.value),
            height: withSpring(scaleImage.value)
        }
    })
    
    const doubleTap = Gesture.Tap()
        .numberOfTaps(2)
        .onStart(()=>{
            if(scaleImage.value !== imageSize * 2){
                scaleImage.value = scaleImage.value * 2
            }
        })
    return (
        <View style={{top: -350}}>
            <GestureDetector gesture={doubleTap}>
                <Animated.Image source={stickerSource} resizeMode="contain" style={[imageStyle, { width: imageSize, height: imageSize}]} />
            </GestureDetector>
        </View>
    )
}

