import React, { Component } from 'react'
import { 
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom'

import Header from './Components/Shared/Header'
import Footer from './Components/Shared/Footer'

import RoutePaths from './Routes'

import NotFound from './Pages/NotFound'

class App extends Component {
	render() {

		return (
			<div>
				<Header />
				<Router>
					<Route render={ ({location}) => (
						<Switch location={ location }>
							{ RoutePaths.map(route => (
								<Route exact={ route.exact } path={ route.path } component={ route.component } />
							))}

							<Route path="*" component={ NotFound } />
						</Switch>
					)} />
				</Router>
				<Footer />
			</div>
		);
	}
}
	
	export default App;
