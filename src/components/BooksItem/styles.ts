import { StyleSheet } from "react-native";
import { THEME } from "@styles/theme";

export const styles = StyleSheet.create({

  itemContainer: {
    borderWidth: 1.5,
    borderColor: THEME.COLORS.GREY_100,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },


  textView: {
    marginTop: 8,
    alignItems: 'center',
  },

  title: {
    fontSize: 16,
    color: THEME.COLORS.GREY_300,
    fontWeight: 'bold',
  },

  author: {
    fontSize: 14,
    color: THEME.COLORS.GREY_300,

  },

  image: {
    width: 100,
    height: 150,
    marginTop: 12,
  },

  favoriteIconContainer: {
    position: 'absolute',
    top: -210,
    right: -150,
    borderRadius: 99,
    borderWidth: 1,
    borderColor: THEME.COLORS.GREY_400,
    padding: 6,
  },

  favoriteIcon: {
    fontSize: 24,
    color: THEME.COLORS.RED,
  },
});

