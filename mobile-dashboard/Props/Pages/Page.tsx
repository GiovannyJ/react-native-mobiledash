import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button, Card } from 'react-native-ui-lib';
import styles from '../Styles/Styles'

interface PageProps {
  title: string;
}

const Page: React.FC<PageProps> = ({ title }) => {
  const handlePress = () => {
    console.log('Button pressed!');
  };

  return (
    <View style={[styles.center, {backgroundColor: "#25292e"}]}>
      <Card containerStyle={{ marginBottom: 20 }}>
        <Image
          source={{ uri: 'https://picsum.photos/200/300' }}
          style={{ width: 200, height: 300 }}
        />
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{title}</Text>
      </Card>
      <Button label="Press me" onPress={handlePress} />
      <Text style={styles.center}>Hello</Text>
    </View>
  );
};

export default Page;
