import * as React from 'react';
import { Card, CardContent, CardMedia, CardActionArea, CardActions, IconButton, Typography, Button } from '@mui/material';
import { AddShoppingCart as AddIcon } from '@mui/icons-material';

interface RecipeCardProps {
    title: string;
    description?: string;
    imagePath: string;
};

export default function RecipeCard({ title, description, imagePath }: RecipeCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imagePath}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          {description && <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {description}
          </Typography>}
        </CardContent>
      </CardActionArea>
      <CardActions sx={{justifyContent: 'end'}}>
        <Button size='small' variant='contained' endIcon={<AddIcon />}>
            ADD
        </Button>
      </CardActions>
    </Card>
  );
}