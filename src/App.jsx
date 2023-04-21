import Home from './Components/Home';
import Popup from './Components/Popup';
import {useGlobalContext} from './context.jsx'
function App() {
  const {showPopup} = useGlobalContext();
  return (
    <div className="App">
      <Home />
      {showPopup && <Popup />}
    </div>
  );
}

export default App;
