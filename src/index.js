import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import { AppContextProvider } from './global/AppContext'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
	<>
		<BrowserRouter>
			<AppContextProvider>
				<App />
			</AppContextProvider>
		</BrowserRouter>
	</>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register()
