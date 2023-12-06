
import React, { useState } from 'react';

import { View, Text, FlatList } from 'react-native';

import { useBooks } from '@hooks/useBooks';
import { BookItem } from '@components/BooksItem';

import { styles } from './styles';

export function Books() {
  const [favorite, setFavorite] = useState<string[]>([]);
  const { books } = useBooks();


  function toggleFavorite(id: string) {
    const updatedFavorite = favorite.includes(id)
      ? favorite.filter(bookId => bookId !== id)
      : [...favorite, id];

    setFavorite(updatedFavorite);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Books:</Text>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BookItem
            item={item}
            isFavorite={favorite.includes(item.id)}
            onToggleFavorite={toggleFavorite}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
