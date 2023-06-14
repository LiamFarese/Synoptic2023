// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

import { Link } from 'react-router-dom';

import NavHeader from '../../components/NavHeader'
import ListingGrid from '../../components/ListingGrid'


export default function listing() {
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
						typography: {
							color: "#1b5e20"
						}}}>Fight Food Waste</Typography>

					<Typography variant='body1'>...by saving these from being thrown away</Typography>

					<Typography variant='body2'>
						<Link to="/listing/create">Want to share? Post it!</Link>
						
					</Typography>

					<br/>
					
					<ListingGrid />

				</Container>

			</Box>

		</>
	)
}
