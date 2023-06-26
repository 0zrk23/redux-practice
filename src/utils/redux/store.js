import { createStore } from 'redux';
import itineraryItems from '../data';
import reducer from './reducers';

export const initialStore = {
  itinerary: itineraryItems,
  total: 0,
}

export const store = createStore(reducer);