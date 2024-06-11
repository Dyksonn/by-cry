import { Pressable, Text } from "react-native"
import { FontAwesome } from "@expo/vector-icons"

import { styles } from "./styles"
import { colors } from "@/styles/colors"

import { MenuButtonProps } from "./menuButton"

export function MenuButton({ title, icon }: MenuButtonProps) {
  return (
    <Pressable style={styles.container}>
      <FontAwesome
        name={icon}
        size={32}
        color={colors.white}
        style={styles.icon}
      />
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}
