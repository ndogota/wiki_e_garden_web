import {Box} from '@mui/material';

function Details() {
  const data =
    {
      "attributes": {
        "description": "La tomate-cerise est beaucoup plus simple à cultiver que la tomate de gros calibre. Appétissante, souvent précoce et résistante aux maladies, elle fait le bonheur des enfants et des citadins qui peuvent la cultiver aisément sur un balcon.",
        "imageUrl": "https://media.ooreka.fr/public/image/plant/266/mainImage-source-11530196.jpg",
        "features": {
          "1": "Moyen",
          "2": "Modéré",
          "3": "Rapide",
          "4": "Fragile"
        },
        "plantationDate": [
          "Février",
          "Mars",
          "Avril",
          "Mai"
        ],
        "harvestDate": [
          "Juin, Juillet",
          "Août",
          "Sept.",
          "Oct."
        ]
      },
      "_id": "64906c3a3d47e2e9b3665025",
      "plantId": 1,
      "name": "Tomate-cerise",
      "createdDate": "2023-06-19T14:54:50.161Z",
      "updatedDate": "2023-06-19T14:54:50.161Z",
      "__v": 0
    }
  {
    return (
      <Box className="layout-detail"
           sx={{
             backgroundImage: `url(${data.attributes.imageUrl})`,
             backgroundSize: 'cover'
           }}>
        <Box className="content-details">
          <Box className="content-wrapper-details">
            <Box className="name">
              Nom: {data.name}
            </Box>
            <Box className="description">
              Description: {data.attributes.description}
            </Box>
            <Box className="harvestDate">
              Date de récolte:
              {
                data.attributes.harvestDate.map(harvestDate => {
                  return (
                    <Box>
                      {harvestDate}
                    </Box>
                  )
                })
              }
            </Box>
            <Box className="plantationDate">
              Date de récolte:
              {
                data.attributes.plantationDate.map(plantationDate => {
                  return (
                    <Box>
                      {plantationDate}
                    </Box>
                  )
                })
              }
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Details;
