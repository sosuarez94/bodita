import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import HeaderComponent from "./components/Header";
import Info from "./components/Info";
import Invitation from "./components/Invitation";

function App() {  
  return (
    <>
      <HeaderComponent />
      <section>
        <h2>“</h2>
        <p>
          Cuando nuestras almas se encontraron, el universo nos sonrió y esa
          sonrisa encendió el fuego que hay en nuestro corazón.  <br/>En el aire flota
          la magia que nos conecta y ésta fluye como el agua guiando nuestro
          camino. Por eso hoy nos elegimos para sembrar nuestro amor en la
          tierra, para que lo nutra y fortalezca, haciendo ésta unión sagrada
          fuerte y firme como un gran roble. <br/>Hoy nos elegimos no solo el uno al
          otro, sino también a ustedes, que son parte esencial de este viaje.
          Juntos, celebraremos una unión que trasciende lo físico y se ancla en
          lo eterno.
        </p>
      </section>
      <Banner/>
      <Info/>
      <Invitation/>
      <Footer/>
    </>
  );
}

export default App;
