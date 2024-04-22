import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const CompareProducts = ({ compareItems }) => {
  return (
    <Grid container spacing={2}>
      {compareItems.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price: {item.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description: {item.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CompareProducts;