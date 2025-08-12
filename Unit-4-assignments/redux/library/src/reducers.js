import {
  ADD_BOOK,
  DELETE_BOOK,
  EDIT_BOOK,
  TOGGLE_READ,
  SET_FILTER,
} from "./actions";
import { combineReducers } from "redux";

const initialBooks = [
];

function booksReducer(state = initialBooks, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        { ...action.payload, id: Date.now().toString(), read: false },
      ];
    case DELETE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    case EDIT_BOOK:
      return state.map((book) =>
        book.id === action.payload.id ? { ...book, ...action.payload } : book
      );
    case TOGGLE_READ:
      return state.map((book) =>
        book.id === action.payload ? { ...book, read: !book.read } : book
      );
    default:
      return state;
  }
}

const initialFilter = {
  author: "",
  genre: "",
  read: "all", 
};

function filterReducer(state = initialFilter, action) {
  switch (action.type) {
    case SET_FILTER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  books: booksReducer,
  filter: filterReducer,
});
