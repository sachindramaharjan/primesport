import { compose, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducer'

export default function configureStore(): any {
	const createStoreWithMiddleware = compose(
		typeof window === 'object' &&
			typeof (window as any).devToolsExtension !== 'undefined'
			? (): any => (window as any).__REDUX_DEVTOOLS_EXTENSION__ // eslint-disable-line no-underscore-dangle
			: (f: any): any => f
	)(createStore)

	const store = createStoreWithMiddleware(
		rootReducer,
		composeWithDevTools(applyMiddleware(thunk))
	)

	if ((module as any).hot) {
		// Enable Webpack hot module replacement for reducers
		;(module as any).hot.accept('./reducer', () => {
			const nextRootReducer = require('./reducer') // eslint-disable-line global-require, @typescript-eslint/no-var-requires
			store.replaceReducer(nextRootReducer)
		})
	}

	return store
}
