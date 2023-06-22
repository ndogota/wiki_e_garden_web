import {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function List({plants, valeurInput}) {

  const [data, setData] = useState([]);
  const maxLength = 80;

  useEffect(() => {
    const searchInput = valeurInput;
    const matchingProducts = plants.filter(product => product.name.toLowerCase().includes(searchInput));
    setData(matchingProducts);
  }, [valeurInput, plants])

  return (
    <>
      <div className="list-title">List of products E-Garden</div>
      <div className="list-container">
        {data.map((plant) => {
          return (
            <Card id="results" sx={{
              maxWidth: '240px',
              flex: '240px',
              margin: '10px',
            }} key={plant._id}>
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
      </div>
    </>
  );
}

export default List;
