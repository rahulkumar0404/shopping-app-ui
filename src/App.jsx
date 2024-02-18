import Header from './components/Header';
import Shop from './components/Shop';
import { CardContextProvider } from './store/shopping-cart-context';
function App() {
  return (
    <CardContextProvider>
      <Header />
      <Shop />
    </CardContextProvider>
  );
}

export default App;
