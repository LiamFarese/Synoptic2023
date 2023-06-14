// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import NavHeader from '../components/NavHeader.jsx'
import RegisterForm from '../components/RegisterForm.jsx'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export default function About() {
	return (
		<>
			<NavHeader />

			<Box  style={{ width: "100%" }} sx={{
				display: 'flex',
				justifyContent: 'center',
				textAlign: 'center',
				}}>

				<Container>
					<br/>

					<Typography variant='h3' sx={{
						textAlign: 'center',
						typography: {
							color: "#1b5e20"
						}}}>Register With Us</Typography>

					<br />

					<Typography variant='h5'>Enter new account details</Typography>

					<br/>

					<RegisterForm />

				</Container>

			</Box>

		</>
	)
}
