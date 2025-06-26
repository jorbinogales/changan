import Layout from './layout/Layout';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cs55plusPage from './pages/cs55PlusPage';

function App() {
	return (
		<Layout>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Cs55plusPage />} />
					{/* Agrega aquí más rutas para otros modelos */}
				</Routes>
			</BrowserRouter>
		</Layout>
	);
}

export default App;
