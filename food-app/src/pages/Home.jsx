// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import NavHeader from '../components/NavHeader'
import CardHome from '../components/CardHome'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Container } from '@mui/material'

export default function Home() {
	return (
		<> 
			<NavHeader />

			<Box  style={{ width: "100%" }} sx={{
					display: 'flex',
					justifyContent: 'center',
					}}>
				<Box className="container" sx={{
					width: {
						xs: '95%',
						sm: '90%',
						md: '80%',
						lg: '80%',
						xl: '75%',
					}
					}}>

					<img src="https://foodprint.org/wp-content/uploads/2018/11/what-is-urban-agriculture.jpg" alt="Home-Garden" style={{ width: "100%" }}/>
					<Typography className="centered" sx={{
						width: '100%',
						typography: {
							xs: 'h4',
							sm: 'h3',
							md: 'h2',
							lg: 'h2',
							xl: 'h1',
						}
						}}>
						Together<br/>For a Sustainable Future
					</Typography>

				</Box>
			</Box>
			
			<br/>
			<br/>


			<Container style={{ width: "80%" }}>
				<CardHome/>
			</Container>

			<br/>
			<br/>

		</>
	)
}
