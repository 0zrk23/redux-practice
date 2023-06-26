import { CLEAR_ITINERARY, GET_TOTALS, REMOVE_LOCATION, RESET_ITINERARY, TOGGLE_DAYS } from './actions';
import { initialStore } from './store';

//reducer
function reducer(state = initialStore, action){
  //switch case for reducer
  switch(action.type){
    //case if clear
    case CLEAR_ITINERARY:
      console.log('Itinerary cleared');
      return {
        ...state,
        itinerary: [],
      }

    //case if reset
    case RESET_ITINERARY:
      console.log('Itinerary reset');
      return {
        ...state,
        itinerary: initialStore.itinerary,
      }

    case REMOVE_LOCATION:
      console.log('Location removed');
      return {
        ...state,
        itinerary: state.itinerary.filter(location => location.id !== action.payload.id)
      }

    case TOGGLE_DAYS:
      console.log(`Days ${action.payload.toggle === 'inc'? 'increased' : 'decreased'}`);
      const modifier = action.payload.toggle === 'inc' ? 1 : -1;
      return {
        ...state,
        itinerary: state.itinerary.map(location => location.id !== action.payload.id ? location : {...location, days: location.days + modifier})
      }

    case GET_TOTALS:
      let {total} = state.itinerary.reduce(
        (tripTotal,location)=>{
          tripTotal.total += location.price * location.days;
          return tripTotal
        },{
          total: 0,
        }
      )
      total = parseFloat(total.toFixed(2));
      return {
        ...state,
        total,
      }
    
    //default
    default:
      console.log('State returned')
      return state
  }
}

export default reducer