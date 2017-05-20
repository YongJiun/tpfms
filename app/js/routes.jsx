/* [library] */
import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

/* [components] */
import App from './app'
import Home from './pages/home/home-main'
import Login from './pages/account/login'

/* [test] */
import Repos from './pages/repos/repos-main'
import Repo from './pages/repos/repo'

module.exports = (
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			
			<IndexRoute component={Home}/>

			<Route path="/login" component={Login}></Route>

			<Route path="/repos" component={Repos}>
				<Route path="/repos/:userName/:repoName" component={Repo}/>
			</Route>

		</Route>
	</Router>
)