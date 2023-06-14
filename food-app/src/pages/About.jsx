// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import NavHeader from '../components/NavHeader.jsx'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
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
						}}}>Rescue, Share, Thrive:<br/>Uniting Communities, Saving Food</Typography>

					<br />

					<Typography variant='h5'>About Us</Typography>

					<br/>

					<Paper elevation={4} sx={{
						padding: '2rem',
						}}>
						<Typography variant='body1'>Our mission is to promote sustainability, foster community engagement, and inspire individuals to lead environmentally conscious lives.
						<br/>Through our platform, we aim to provide a network of like-minded people who wish to make a positive impact and to give them the tools they need to do so.
						<br />
						Whether its by sharing food, volunteering, or donating, we want to make it easy for people to get involved in their community and to make a difference.
						<br/>Join us on this journey as we explore innovative solutions, share practical tips, and encourage meaningful conversations about creating a greener and more sustainable future for all. 
						<br />
						<br />
						We are a community of people who want to make a difference.</Typography>
					</Paper>

					<br />
					<br />

					<Typography variant='h5'>Govan, Scotland & the Cost of Living Crisis</Typography>

					<br />

					<Paper elevation={4} sx={{
						padding: '2rem',
						}}>
						<Typography variant='body1'>The cost of living crisis has had a profound impact on people's lives.
						<br/>Govan, and all over the UK, people are increasingly finding it more difficult to access affordable and nutritious food.
						<br/>Many people find themselves struggling to make ends meet, often having to make difficult choices between paying bills, rent, or buying sufficient food.
						</Typography>
					</Paper>

					<br />
					<br />

					<Typography variant='h5'>Our Goal</Typography>

					<br />

					<Paper elevation={4} sx={{
						padding: '2rem',
						}}>
						<Typography variant='body1'>Whilst todays problems cannot be solved by a website, we hope it can make a big enough difference so that there will be less people going without food.
						<br/>
						<br/>Without meaningful action from government, this problem will remain.
						</Typography>
					</Paper>

					<br />
					<br />

				</Container>

			</Box>

		</>
	)
}
