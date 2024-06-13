import { View, Text, ImageBackground } from "react-native";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { Avatar, AvatarImage } from "@/components/Avatar";
import { Options } from "./Options";

const data = [
  {
    icon: <Feather name="send" size={20} color={colors.white} />,
    text: "Send",
  },
  {
    icon: <Ionicons name="git-pull-request-outline" size={20} color={colors.white} />,
    text: "Request",
  },
  {
    icon: <AntDesign name="linechart" size={20} color={colors.white} />,
    text: "In & Out",
  },
  {
    icon: <AntDesign name="qrcode" size={20} color={colors.white} />,
    text: "QR Code",
  },
];

export function Header() {
  return (
    <View className=" bg-gray-600 overflow-hidden pb-10 p-7">
      <ImageBackground
        source={require("@/assets/circle-red.png")}
        resizeMode="contain"
        imageStyle={{
          height: 400,
          position: "absolute",
          overflow: `hidden`,
          right: -205,
        }}
        className="pt-20"
      >
        <View className="flex-row justify-between items-center">
          <View className="">
            <Text className="text-white font-medium text-xl">
              IDR 24,420,00
            </Text>
            <Text className="text-gray-400 font-regular text-sm">
              Active Balance
            </Text>
          </View>

          <View className="flex-row items-center gap-4">
            <Ionicons
              name="notifications-outline"
              size={20}
              color={colors.white}
            />
            <Avatar className="border-red-200 border-2 size-12">
              <AvatarImage source={{ uri: "https://github.com/dyksonn.png" }} />
            </Avatar>
          </View>
        </View>

        <Options data={data} />
      </ImageBackground>
    </View>
  );
}
