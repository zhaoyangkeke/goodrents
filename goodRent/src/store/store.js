import { createStore,applyMiddleware,compose } from 'redux'
import reducer from './reducer'
import { createLogger } from 'redux-logger' 
import promiseMiddleware from 'redux-promise'


let logger = createLogger({
    collapsed:true
})

export default function configStore(initState){
    return createStore(reducer,initState,compose(applyMiddleware(logger),applyMiddleware(promiseMiddleware)))
}
