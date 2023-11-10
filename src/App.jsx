// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import ContextAPI from "./components/ContextAPI";
// import Navbar from "./usingMapMethod/Navbar";
// import CartContainer from "./usingMapMethod/CartContainer";
// import ContextAPI from "./usingMapMethod/ContextAPI";

function App() {
  return (
    <ContextAPI>
      <main>
        <Navbar />
        <CartContainer />
      </main>
    </ContextAPI>
  );
}

export default App;
