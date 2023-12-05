import React, { useEffect, useState } from 'react';

import { View, Text, FlatList, Image, TouchableOpacity, Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';
import api from '../../service/api';

interface BooksProps {
  id: string;
  title: string;
  author: string;
  cover_url: string;
  download_url: string;
}

export function Books() {
  const [books, setBooks] = useState<BooksProps[]>([]);
  const [favorite, setFavorite] = useState<String[]>([])

  function fetchBook() {
    try {
      api.get('books.json')
        .then(response => {
          const data = response.data;
          const uniqueBooks = removeDuplicates(data, 'id');
          setBooks(uniqueBooks);
        })
        .catch(error => {
          console.error('ERRO', error);
        });
    } catch (error) {
      console.error('ERRO', error);
    }
  }

  useEffect(() => {
    fetchBook();
  }, []);

  function removeDuplicates(arr: BooksProps[], key: keyof BooksProps): BooksProps[] {
    const uniqueMap = new Map<string, BooksProps>();
    arr.forEach(item => uniqueMap.set(item[key], item));

    // Array.from é usado para converter os valores do Map de volta em um array
    return Array.from(uniqueMap.values());
  }

  function openLink(url: string) {
    Linking.openURL(url);
  }

  function toggleFavorite(id: string) {
    // Copiar o array de favoritos para evitar a mutação direta do estado
    const updatedFavorite = [...favorite];
    // Verificar se o livro já está nos favoritos
    const isBookInFavorite = updatedFavorite.includes(id);

    if (isBookInFavorite) {
      // Se o livro já estiver nos favoritos, remova-o
      const index = updatedFavorite.indexOf(id);
      updatedFavorite.splice(index, 1);
    } else {
      // Se o livro não estiver nos favoritos, adicione-o
      updatedFavorite.push(id);
    }

    // Atualizar o estado de favoritos
    setFavorite(updatedFavorite);
  }

  function renderItem({ item }: { item: BooksProps }) {
    return (
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.cover_url }} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.author}>{item.author}</Text>
        <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
          <FontAwesome
            name={favorite.includes(item.id) ? 'heart' : 'heart-o'}
            style={styles.favoriteIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={{ opacity: 0.7 }} onPress={() => openLink(item.download_url)}>
          <Text style={styles.link}>{item.download_url}</Text>
        </TouchableOpacity >
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Books:</Text>
      <FlatList
        data={books}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
