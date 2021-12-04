import "./App.css";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";

import { PageContainer } from "./generalStyleds";

//Images
import FrechFries from "./assets/images/plates/plate__french-fries.png";
import BaconEggs from "./assets/images/plates/plate__bacon-eggs.png";
import ChickenSalad from "./assets/images/plates/plate__chicken-salad.png";
import FishStickFries from "./assets/images/plates/plate__fish-sticks-fries.png";
import Ravioli from "./assets/images/plates/plate__ravioli.png";
import SalmonVegetales from "./assets/images/plates/plate__salmon-vegetables.png";
import SpaguettiMeatSauce from "./assets/images/plates/plate__spaghetti-meat-sauce.png";
import Tortellini from "./assets/images/plates/plate__tortellini.png";

const FakeData = [
  {
    plateName: "French Fries with Ketchup",
    platePrice: "4.50",
    plateImg: FrechFries,
  },
  {
    plateName: "Bacon with letuce",
    platePrice: "4.50",
    plateImg: BaconEggs,
  },
  {
    plateName: "Spaghetti with Meat Sauce",
    platePrice: "4.50",
    plateImg: SpaguettiMeatSauce,
  },
  {
    plateName: "French Fries with Ketchup",
    platePrice: "4.50",
    plateImg: FishStickFries,
  },
  {
    plateName: "Ravioli with cheese",
    platePrice: "4.50",
    plateImg: Ravioli,
  },
  {
    plateName: "Salmon with Vegetales",
    platePrice: "4.50",
    plateImg: SalmonVegetales,
  },
  {
    plateName: "Chicken with a lot of Salad",
    platePrice: "4.50",
    plateImg: ChickenSalad,
  },
  {
    plateName: "Tortellini very alone",
    platePrice: "4.50",
    plateImg: Tortellini,
  },
];

function App() {
  return (
    <CartProvider>
      <PageContainer>
        <Menu FakeData={FakeData} />
        <Cart />
      </PageContainer>
    </CartProvider>
  );
}

export default App;
