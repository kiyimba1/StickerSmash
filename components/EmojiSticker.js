import { Image, View } from "react-native";

export default function EmojiSticker({imageSize, stickerSource}){
    return (
        <View style={{top: -350}}>
            <Image source={stickerSource} resizeMode="contain" style={{ width: imageSize, height: imageSize}} />
        </View>
    )
}