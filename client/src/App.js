import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './styles/main.scss';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Upload from './components/Upload/Upload';

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Route exact path="/" component={Home} />
			<Route exact path="/upload" component={Upload} />
		</BrowserRouter>
	);
}

export default App;
