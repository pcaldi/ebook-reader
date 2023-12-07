import { THEME } from "@styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: THEME.COLORS.GREEN_LIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 10,
    padding: 10,
  },
  title: {
    color: THEME.COLORS.WHITE,
    fontSize: 32,
    fontWeight: '600'
  },
  logo: {
    width: 56,
    height: 56,
  }
})
