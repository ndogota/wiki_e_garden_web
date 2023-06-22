import {useState} from 'react';
import {Box} from '@mui/material';

import List from './List';

function Home() {

  //FAIRE UN APPEL POUR TOUTES LES PLANTES
  const data = {
    "plants": [
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
      },
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
        "name": "Courgette",
        "createdDate": "2023-06-19T14:54:50.161Z",
        "updatedDate": "2023-06-19T14:54:50.161Z",
        "__v": 0
      },
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
        "name": "Concombre",
        "createdDate": "2023-06-19T14:54:50.161Z",
        "updatedDate": "2023-06-19T14:54:50.161Z",
        "__v": 0
      },
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
        "name": "Carotte",
        "createdDate": "2023-06-19T14:54:50.161Z",
        "updatedDate": "2023-06-19T14:54:50.161Z",
        "__v": 0
      },
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
        "name": "Tomate-Allongée",
        "createdDate": "2023-06-19T14:54:50.161Z",
        "updatedDate": "2023-06-19T14:54:50.161Z",
        "__v": 0
      },
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
        "name": "Tomate-Pasthèque",
        "createdDate": "2023-06-19T14:54:50.161Z",
        "updatedDate": "2023-06-19T14:54:50.161Z",
        "__v": 0
      },
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
        "name": "Radis",
        "createdDate": "2023-06-19T14:54:50.161Z",
        "updatedDate": "2023-06-19T14:54:50.161Z",
        "__v": 0
      }
    ],
  }

  const [valueInput, setvalueInput] = useState('');

  return (
    <>
      <section className="u-section-2">
        <Box className="u-group-1">
          <Box className="u-container-layout-1">
            <h1 className="u-text-1">Ferme d'agrumes</h1>
            <Box className="u-text-2">Nous exportons de Chypre vers
              l'Europe des produits frais de qualité: pamplemousse blanc et rouge, oranges de Valence, grenade,
              mandoras
              et mandarines Nova.
            </Box>
            <Box className="u-container-input">

              <input className="u-container-input-text" type="text" id="searchInput" value={valueInput}
                     onChange={e => setvalueInput(e.target.value)}/>
              <button className="u-input-button">Rechercher</button>
            </Box>
          </Box>
        </Box>
      </section>
      <List plants={data.plants} valueInput={valueInput}/>
    </>
  );
}

export default Home;
