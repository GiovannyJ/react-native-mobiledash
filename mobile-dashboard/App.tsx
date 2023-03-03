import React from 'react';
import { SafeAreaView } from 'react-native';

import ThemeScreen from './Props/Navbar'

const App: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemeScreen/>
    </SafeAreaView>
  );
};

export default App;
