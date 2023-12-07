import { StyleSheet } from "react-native";
import { THEME } from "@styles/theme";

export const styles = StyleSheet.create({

  itemContainer: {
    width: 250,
    height: 290,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },

  bookCard: {
    width: '100%',
    height: 300,

    backgroundColor: THEME.COLORS.GREY_50,
    borderRadius: 8,

    alignItems: 'center',
    justifyContent: 'center',


    padding: 12,
    position: 'relative'
  },


  textView: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 16,
    color: THEME.COLORS.BLUE,
    fontWeight: '600',
  },

  author: {
    fontSize: 14,
    color: THEME.COLORS.GREY_300,
    fontWeight: '400',

  },

  imageView: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: 100,
    height: 150,
  },

  favoriteIconContainer: {
    position: 'absolute',
    top: -235,
    right: -120,
    borderRadius: 99,
    borderWidth: 1,
    borderColor: THEME.COLORS.PURPLE,
    padding: 6,
    margin: 8
  },

  favoriteIcon: {
    fontSize: 24,
    color: THEME.COLORS.RED,
  },
});

