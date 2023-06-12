import { createTheme, colors, ThemeProvider } from '@mui/material';
import {Route, Routes} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Posts from './pages/posts/Posts'
import CreatePost from './pages/posts/CreatePost'
import Forum from './pages/Forum'

import './App.css'

const theme = createTheme({
	palette: {
		primary: {
			main: colors.lightGreen[600],
		},
		background: {
			paper: colors.lightGreen[400],
		}
	},
	typography: {
		h1: {
			fontFamily: 'Peace Sans',
		},
		h2: {
			fontFamily: 'Peace Sans',
		},
		h3: {
			fontFamily: 'Peace Sans',
		},
		h4: {
			fontFamily: 'Peace Sans',
		}
	}
})
function App() {

  return (
    <>
			<ThemeProvider theme={theme}>
				<Routes>
				
					<Route path='/' element={<Home />}/>

					<Route path='/about' element={<About />}/>

					<Route path='/posts' element={<Posts />}/>
					<Route path='/posts/create' element={<CreatePost />}/>

					<Route path='/forum' element={<Forum />}/>

				
				</Routes>
			</ThemeProvider>
    </>
  )
}

export default App
