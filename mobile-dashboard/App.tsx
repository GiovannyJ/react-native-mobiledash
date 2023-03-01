import React from 'react';
import { SafeAreaView } from 'react-native';
import Page from './Props/Page';
import Test from './Props/Test';
import ChoosePhotos from './Props/ChoosePhoto'

const App: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ChoosePhotos/>
    </SafeAreaView>
  );
};

export default App;
