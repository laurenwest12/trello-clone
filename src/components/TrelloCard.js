import React from 'react';
import Card from '@material-ui/core/Card';
import { Typography, CardContent } from '@material-ui/core/';

const TrelloCard = ({ text }) => {
  return (
    <div>
      <Card style={styles.cardContainer}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

const styles = {
  cardContainer: {
    marginBottom: 8,
  },
};

export default TrelloCard;
