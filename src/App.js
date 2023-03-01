import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ProductsList from "./components/allProducts/ProductsList";


function App() {
  return (
    <div className="app_js">
      <Header />
      <ProductsList />
      <Footer name="Marius" year="2023" />
    </div>
  );
}

export default App;