import React, { Component } from 'react'
import { 
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom'

import { MainWrapper } from './AppStyle'

import Header from './Components/Shared/Header'
import Footer from './Components/Shared/Footer'

import RoutePaths from './Routes'

import NotFound from './Pages/NotFound'

class App extends Component {
	render() {

		return (
			<Router>
				<Header />
				
				<MainWrapper>
					<div className="container">
						<Route render={ ({location}) => (
							<Switch location={ location }>
								{ RoutePaths.map(route => (
									<Route key={ location } exact={ route.exact } path={ route.path } component={ route.component } />
								))}

								<Route path="*" component={ NotFound } />
							</Switch>
						)} />
					</div>
				</MainWrapper>

				<Footer />
			</Router>
		);
	}
}
	
	export default App;
