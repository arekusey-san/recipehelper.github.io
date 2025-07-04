import logo from './logo.svg'
import './App.css'
import {Link, Route, Routes} from 'react-router-dom'

function App()
{
	return (<div style={{padding: '2em'}}>
		<h1>Hello from GitHub Pages!</h1>
		<nav>
			<Link to={'/'}>Home</Link> | <Link to={'/about'}>About</Link>
		</nav>
		<Routes>
			<Route path={'/'} element={<div>🏡 Home page</div>} />
			<Route path={'/about'} element={<div>ℹ️ About page</div>} />
		</Routes>
	</div>)
}

export default App
