import { ActivityIndicator, View } from "react-native";
import { THEME } from "../../styles/theme";

import { styles } from "./style";

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={THEME.COLORS.GREY_400} />
    </View>
  );
}
