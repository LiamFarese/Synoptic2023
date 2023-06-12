// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function BasicCard() {
  return (
    <Card sx={{ width: "100%" }}>
      <CardContent>
				<br/>
        <Typography variant="h4" component="div" sx={{ 
					textAlign: 'center', 
					textDecoration: 'underline',
					}} underline="always">
				Welcome to our food-saving community! 
        </Typography>
				<br/>
        <Typography sx={{ textAlign: 'center', fontSize: '24px' }}>
					Join us in the fight against food waste and rising food prices.
        </Typography>
				<br/>
        <Typography sx={{ textAlign: 'center', fontSize: '20px' }}>
					Connect with like-minded individuals, access surplus food, and contribute to a more sustainable future. 
        </Typography>
				<br/>
        <Typography sx={{ textAlign: 'center', fontSize: '20px' }}>
					Together, we can make a difference by reducing waste, supporting local farmers, and building a stronger, more resilient community. 
        </Typography>
				<br/>
      </CardContent>
    </Card>
  );
}