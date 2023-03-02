import React from 'react';
import { SafeAreaView } from 'react-native';
import Page from './Props/Page';
import Test from './Props/Test';
import ChoosePhotos from './Props/ChoosePhoto'
import TabsNavigator from './Props/components/Navbar'

const App: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ChoosePhotos/>
      <TabsNavigator/>
    </SafeAreaView>
  );
};

export default App;
