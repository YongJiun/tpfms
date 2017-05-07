import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from './app'
import About from './pages/about/about-main'
import Repos from './pages/repos/repos-main'
import Repo from './pages/repos/repo'
import Home from './pages/home/home-main'

import Login from './pages/account/login'

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