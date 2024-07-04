import { cconfigureStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import "regenerator-runtime/runtim";

import reducer from "./reducer";
import middleware from "./middleware";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore(reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(middleware);