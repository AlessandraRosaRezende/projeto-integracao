import { Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
// import UserSettings from "./pages/UserSettings";
import Users from './pages/Users';
import Login from './pages/Login';
import './styles/app.css';

function App() {
  return (
		<Routes>
			{/* <Route path="users/settings" element={<UserSettings />} /> */}
			<Route path="/users" element={<Users />} />
			<Route path="/login" element={<Login />} />
			<Route exact path="/" element={<Navigate to="/login" />} />
		</Routes>
	);
}

export default App;
