import React from 'react';
import { Header } from './components/header/Header';
import { Menu } from './components/menu/Menu';
import { BlockInfo } from './components/block-info/BlockInfo';
import { blocks } from './data/blocks';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className='w-5/6 mx-auto'>
      <Header />
      <Menu />
      <BlockInfo block={ blocks[0] }/>
      <Footer />
    </div>
  );
}

export default App;
