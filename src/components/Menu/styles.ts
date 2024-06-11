import { colors } from "@/styles/colors"
import { fontFamily } from "@/styles/fontFamily";
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[800],
  },
  content: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
  },
  title: {
    fontSize: 18,
    fontFamily: fontFamily.medium,
    color: colors.white,
    flex: 1,
    textAlign: "center",
    marginRight: 24,
  },
  options: {
    flexDirection: "row",
    gap: 16,
    marginTop: 32,
  },
})
