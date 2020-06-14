import { persistStore } from 'redux-persist';
import { createStore } from 'redux';
import persistReducers from './persistisReducers';
import rootReducer from './modules/rootReducer';

const store = createStore(persistReducers(rootReducer),
);
const persistor = persistStore(store);

export { store, persistor };