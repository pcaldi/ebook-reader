import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: THEME.COLORS.WHITE,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemContainer: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: THEME.COLORS.GREY_100,
    padding: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 16,
    color: THEME.COLORS.GREY_800,
  },
  image: {
    width: 16,
    height: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: THEME.COLORS.GREY_100,
    padding: 16,
    borderRadius: 8,

  }
});




