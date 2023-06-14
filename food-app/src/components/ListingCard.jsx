// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function MultiActionAreaCard() {
  return (
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
  );
}