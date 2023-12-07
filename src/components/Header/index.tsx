import { Image, Text, View } from 'react-native';
import { styles } from './styles';



const logoImg = require('@assets/logo.png');


export function Header() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logoImg} />
      <Text style={styles.title}>E-books</Text>
    </View>
  );
}
