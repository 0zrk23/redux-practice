// import './App.css';
import { Provider } from 'react-redux';
import ItineraryContainer from './components/ItineraryContainer';
import Navbar from './components/Navbar';
import itineraryList from './utils/data'
import { store } from './utils/redux/store';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <ItineraryContainer />
    </Provider>
  );
}

export default App;
