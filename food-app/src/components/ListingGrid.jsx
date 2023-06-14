// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import { useEffect, useState } from 'react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
	const [listings, setListings] = useState([]);

	useEffect(() => {
    // Fetch data from the database or API
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/listing');
        const data = await response.json();
        setListings(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

		fetchData();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 2, sm: 8, md: 12 }}>
        {listings.map((listing, index) => (
          <Grid xs={2} sm={4} md={4} key={index}>
            <Item sx={{ display: 'flex', justifyContent: 'center' }}>
							
							{/* Listing Card */}
							<Card sx={{ width: 345 }}>
								<CardActionArea>
									<CardMedia
										component="img"
										height="140"
										image="..."
										alt="Pic to go here..."
									/>
									<CardContent>
										<Typography gutterBottom variant="h5" component="div">
											{listing.title}
										</Typography>
										<Typography variant="body2" color="text.secondary"   sx={{
											height: '3em', // Adjust the height as needed
											wordWrap: 'break-word',
											overflow: 'hidden',
											textOverflow: 'ellipsis',
											display: '-webkit-box',
											WebkitLineClamp: 2,
											WebkitBoxOrient: 'vertical'}}
										>
											{listing.body}
										</Typography>
										<Typography variant="body2" color="text.secondary">
											Post by {listing.username}
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
							{/* Listing Card */}
						</Item>



          </Grid>
        ))}
      </Grid>
    </Box>
  );
}