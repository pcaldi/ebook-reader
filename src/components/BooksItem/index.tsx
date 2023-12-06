import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { BooksProps } from '@hooks/useBooks';
import { styles } from './styles';

export type BookItemProps = {
  item: BooksProps;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
};

export function BookItem({ item, isFavorite, onToggleFavorite }: BookItemProps) {

  const openLink = () => {
    Linking.openURL(item.download_url);
  };

  return (
    <View style={styles.itemContainer}>

      <TouchableOpacity
        style={{ opacity: 0.7 }}
        onPress={openLink}
      >
        <Image source={{ uri: item.cover_url }} style={styles.image} />
      </TouchableOpacity>

      <View style={styles.textView}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.author}>{item.author}</Text>
      </View>

      <TouchableOpacity onPress={() => onToggleFavorite(item.id)}>
        <View style={styles.favoriteIconContainer}>
          <FontAwesome name={isFavorite ? 'heart' : 'heart-o'} style={styles.favoriteIcon} />
        </View>
      </TouchableOpacity>

    </View>
  );
}

