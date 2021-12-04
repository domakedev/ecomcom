import './App.css';
import Menu from './components/Menu';
import Cart from './components/Cart';

import {PageContainer} from "./generalStyleds"

function App() {
  return (
    <PageContainer>
     <Menu/> 
     <Cart/> 
    </PageContainer>
  );
}

export default App;
