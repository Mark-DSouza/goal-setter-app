import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
// import Header from './components/Header';
import Header from './components/Header';

function App() {
	return (
		<>
			<Router>
				<Header />
				<div className='container'>
					<Routes>
						<Route path='/' element={<Dashboard />} />
						<Route path='/login' element={<Login />} />
						<Route path='/register' element={<Register />} />
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;