import { useState, useEffect } from 'react';
import api from '@service/api';

export type BooksProps = {
  id: string;
  title: string;
  author: string;
  cover_url: string;
  download_url: string;
}

export function useBooks() {
  const [books, setBooks] = useState<BooksProps[]>([]);

  const fetchBooks = async () => {
    try {
      const response = await api.get<BooksProps[]>('books.json');
      const data = response.data;
      const uniqueBooks = removeDuplicates(data, 'id');
      setBooks(uniqueBooks);
    } catch (error) {
      console.error('ERRO', error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  function removeDuplicates(arr: BooksProps[], key: keyof BooksProps): BooksProps[] {
    const uniqueMap = new Map<string, BooksProps>();
    arr.forEach(item => uniqueMap.set(item[key], item));
    return Array.from(uniqueMap.values());
  }

  return { books };
}


