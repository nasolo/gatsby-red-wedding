import thunk from 'redux-thunk';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
import carousel from '../src/components/carousel/utils/redux/reducer'
import videoReducer from '../src/components/videoPlayer/redux/reducer';

//reducers

const reducers = {
    rootReducer,
    carousel,
    videoReducer,
}


const configureAppStore = preloadedState => {
    const store = configureStore({
        reducer: reducers,
        middleware: [thunk, ...getDefaultMiddleware()],
        preloadedState
    })
    return store
}

export default configureAppStore