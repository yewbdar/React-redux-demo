import {createStore} from 'redux'
import cakeReducer from './cakes/cakeReducer'

const store = createStore(cakeReducer)
console.log('store ',store)
export default store