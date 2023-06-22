import {useState} from 'react';
import {Box} from '@mui/material';

import List from './List';

function Banner() {
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

  const [valeurInput, setValeurInput] = useState('');

  return (
    <>
      <section className="u-align-left u-clearfix u-image u-section-2" data-image-width="1980"
               data-image-height="1094" id="carousel_cc53">
        <Box className="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <Box className="u-align-left u-container-style u-group u-opacity u-opacity-60 u-white u-group-1">
            <Box className="u-container-layout u-valign-middle u-container-layout-1">
              <h1 className="u-text u-text-default u-text-palette-3-base u-title u-text-1">Ferme d'agrumes</h1>
              <p className="u-large-text u-text u-text-default u-text-variant u-text-2">Nous exportons de Chypre vers
                l'Europe des produits frais de qualité: pamplemousse blanc et rouge, oranges de Valence, grenade,
                mandoras
                et mandarines Nova.
              </p>
              <Box className="u-container-input">

                <input className="u-container-input-text" type="text" id="searchInput" value={valeurInput}
                       onChange={e => setValeurInput(e.target.value)}/>
                <button className="u-input-button">Rechercher</button>
              </Box>
            </Box>
          </Box>
        </Box>
      </section>
      <List plants={data.plants} valeurInput={valeurInput}/>
    </>
  );
}

export default Banner;
