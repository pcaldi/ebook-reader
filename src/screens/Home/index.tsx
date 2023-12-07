import { Books } from '@components/Books';
import { Header } from '@components/Header';

import { THEME } from '@styles/theme';
import { SafeAreaView } from 'react-native-safe-area-context';

export function Home() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: THEME.COLORS.BLUE, padding: 24, }}>
      <Header />
      <Books />
    </SafeAreaView>

  )
};

