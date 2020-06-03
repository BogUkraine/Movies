import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './styles/main.scss';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Upload from './components/Upload/Upload';
import Search from './components/Search/Search';

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
                <Route path="/" exact>
                    <Header />
                    <Home />
                </Route>
                <Route path="/upload" exact>
                    <Header />
                    <Upload />
                </Route>
				<Route path="/search" exact>
                    <Header />
                    <Search />
                </Route>
                <Redirect to="/" />
            </Switch>
		</BrowserRouter>
	);
}

export default App;
