import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import api from '../../service/api';

export function Home() {
  const [data, setData] = useState('');

  async function fetchData() {
    try {

      const response = await api.get('/books.json');

      // Atualize o estado com os dados da resposta
      setData(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
    }
  };

  useEffect(() => {
    // Chame a função de busca de dados
    fetchData();
  }, []);
  return (
    <View>
      <Text>Dados da API:</Text>
      {data ? (
        <View>
          {/* Renderize os dados recebidos da API */}
          <Text>{JSON.stringify(data)}</Text>
        </View>
      ) : (
        <Text>Carregando dados...</Text>
      )}
    </View>
  );
};

