
import { View, Image, Text, FlatList } from 'react-native';
import { styles } from './styles';
import api from '../../service/api';
import { useEffect, useState } from 'react';


interface BooksProps {
  id: string;
  title: string;
  author: string;
  cover_url: string;
  download_url: string;
}



export function Books() {

  const [books, setBooks] = useState<BooksProps[]>([]);

  async function fetchBook() {
    try {

      const { data } = await api.get('books.json');
      console.log(data);
      setBooks(data);
    } catch (error) {
      console.error('ERRO', error);
    }
  }

  useEffect(() => {
    fetchBook();
  }, []);

  const renderItem = ({ item }: { item: BooksProps }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.cover_url }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.author}>{item.author}</Text>
      <Text style={styles.author}>{item.download_url}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Livros:</Text>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};


