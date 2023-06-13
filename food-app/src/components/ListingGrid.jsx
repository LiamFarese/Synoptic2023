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
import { CardActionArea } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 2, sm: 8, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid xs={2} sm={4} md={4} key={index}>
            <Item sx={{ display: 'flex', justifyContent: 'center' }}>
							
							{/* Listing Card */}
							<Card sx={{ maxWidth: 345 }}>
								<CardActionArea>
									<CardMedia
										component="img"
										height="140"
										image="..."
										alt="Food Pic"
									/>
									<CardContent>
										<Typography gutterBottom variant="h5" component="div">
											Item Name
										</Typography>
										<Typography variant="body2" color="text.secondary">
											Item Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Will be user submitted.
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