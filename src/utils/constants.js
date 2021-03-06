export const api = 'https://course-api.com/react-useReducer-cart-project'

export const initialState = {items: [], totalItems: 0, isLoading: true}

export const actions = {
  SET_INITIAL_DATA: 'SET_INITIAL_DATA',
  SET_ITEM_AMOUNT: 'SET_ITEM_AMOUNT',
  CLEAR_ALL_ITEMS: 'CLEAR_ALL_ITEMS',
  REMOVE_ITEM: 'REMOVE_ITEM'
}
