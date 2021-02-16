import { createStore, combineReducers } from 'redux';
import themeReducer from './Theme/Theme.reducer';

const rootReducer = combineReducers({
  theme: themeReducer
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export default store;