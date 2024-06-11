import { colors } from "@/styles/colors"
import { fontFamily } from "@/styles/fontFamily"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: {
    color: colors.white,
    fontFamily: fontFamily.medium,
    fontSize: 14,
    marginTop: 10,
  },
  icon: {
    padding: 24,
    backgroundColor: colors.gray[700],
    borderRadius: 22,
  },
})
