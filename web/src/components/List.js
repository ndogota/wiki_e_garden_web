import {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Box} from "@mui/material";

function List({plants, valueInput}) {

  const [resultFilter, setResultFilter] = useState([]);
  const maxLength = 80;

  //A CHAQUE VALEUR DANS L'INPUT, CELLE CI EST COMPARE AVEC LES PLANTS
  useEffect(() => {
    const searchInput = valueInput;
    const matchingPlants = plants.filter(product => product.name.toLowerCase().includes(searchInput));
    setResultFilter(matchingPlants);
  }, [valueInput, plants])

  return (
    <>
      <Box className="list-title">Liste de plantes E-Garden</Box>
      {
        plants ? (
          <Box className="list-container">
            {resultFilter.map((plant, index) => {
              return (
                <Card id="results" sx={{
                  maxWidth: '240px',
                  flex: '240px',
                  margin: '10px',
                }} key={index}>
                  <CardMedia
                    sx={{height: 140}}
                    image={plant.attributes.imageUrl}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {plant.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {plant.attributes.description.slice(0, maxLength) + '...'}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">
                      <a className="button-redirect" href={`details/${plant.name.toLowerCase()}`}>Learn More</a>
                    </Button>
                  </CardActions>
                </Card>
              );
            })}
          </Box>
        ) : (
          <Box>
            "Il n'y a aucune donnée"
          </Box>
        )
      }
    </>
  );
}

export default List;
