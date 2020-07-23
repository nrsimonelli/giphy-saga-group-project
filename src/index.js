import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios'; 



// REDUCER
const favoriteReducer = (state = [], action) => {
    if(action.type === 'SET_FAVORITE'){
        return [...state, action.payload];
    }
   
    
    return state;

}
const searchReducer = (state = [], action) => {
    if(action.type === 'SET_SEARCH'){
        console.log(action.payload);
        return action.payload.data.data;
    }
    return state;
}


//SAGA STUFF ----
//"Mail sorter"
// FETCH -> GET
// ADD -> POST
// DELETE -> duh
// CHANGE -> Update/PUT
function* watcherSaga(){
    console.log('In watcher saga');
    yield takeEvery('FETCH_FAVORITE', getFavoriteSaga);
    yield takeEvery('FETCH_QUERY_RESULT', getQueryResultSaga);
    yield takeEvery('ADD_FAVORITE', addFavoriteSaga);
    yield takeEvery('DELETE_FAVORITE', deleteFavoriteSaga);
    yield takeEvery('CHANGE_CATEGORY', changeCategorySaga)
  
  }
  // CRUD 
  // search query to bring images to display (separate)

  // CREATE favorite image on click
  // UPDATE favorite image cateogry on selection
  // DELETE favorite image on click

  function* addFavoriteSaga(action){
    try{
      yield axios.post('/api/plant', action.payload);
      // its like getPlantSaga with extra steps?
      yield put({type: 'FETCH_PLANT'});
    }catch(error){
      console.log('Error with Get:', error);
    }
  }
  
  // Need to replace route and action type below!
  function* deleteFavoriteSaga(action){
    try{
      yield axios.delete('/api/plant/' + action.payload);
      yield put({type: 'FETCH_PLANT'});
    }catch(error){
      console.log('Error with DELETE', error);
    }
  }
  
  // Need to replace route and action type below!
  function* getFavoriteSaga(){
    try{
      const response = yield axios.get('/api/plant');
      yield put({type: 'SET_FAVORITE', payload: response.data});
    }catch(error){
      console.log('Error with Get:', error);
    }
  }

// Need to replace route and action type below!
  function* changeCategorySaga(){
      try{
        yield console.log('you changedCategorySaga');
        
      }catch(err){
          console.log('error', err);
          
      }
  }
  // Need to replace route and action type below!
  function* getQueryResultSaga(action){ //<----------------
      try{
          const response = yield axios.get(`/api/search/${action.payload}`);
          yield put ({type: 'SET_SEARCH', payload: response});
          
      }catch(err){
        console.log('error', err);
      }
  }
  
  // Saga Setup #2 - create the saga middleware
  const sagaMiddleware = createSagaMiddleware();
  
  const store = createStore(
    combineReducers({ favoriteReducer, searchReducer }),
    applyMiddleware(sagaMiddleware, logger),
  );
  
  sagaMiddleware.run(watcherSaga);
  
  ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));



