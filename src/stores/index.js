import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import movieListReducer from "containers/home-module/MovieList/module/reducer";
import cinemaComplexReducer from "containers/home-module/CinemaComplex/module/reducer";
import searchToolReducer from "containers/home-module/SearchTool/module/reducer";

const rootReducer = combineReducers({
  movieListReducer,
  cinemaComplexReducer,
  searchToolReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
