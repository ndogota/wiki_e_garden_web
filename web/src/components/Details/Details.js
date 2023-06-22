import {useEffect, useState} from 'react';
import {Box} from '@mui/material';
import {dateCalendar} from './utils';

function Details() {

  const [urlName, setUrlName] = useState('');

  //REMPLACER PAR LE CALL API PAR NOM DE LA PLANTE
  //OU BIEN CHANGER DANS LE COMPONENT LIST PAR L'ID ET LE PATH DANS APP.JS
  const data = {
    "attributes": {
      "description": "La tomate-cerise est beaucoup plus simple à cultiver que la tomate de gros calibre. Appétissante, souvent précoce et résistante aux maladies, elle fait le bonheur des enfants et des citadins qui peuvent la cultiver aisément sur un balcon.",
      "imageUrl": "https://media.ooreka.fr/public/image/plant/266/mainImage-source-11530196.jpg",
      "features": [
        {
          "plantFeatureName": "waterNeed",
          "values": {
            "Faible": "La plante à besoins d'une petite quantité d'eau au quotidien"
          }
        },
        {
          "plantFeatureName": "sunExposure",
          "values": {
            "Moyen": "La plante à besoins d'une petite quantité d'eau au quotidien"
          }
        },
        {
          "plantFeatureName": "FranchementJeSuisFatigué",
          "values": {
            "Important": "La plante à besoins d'une petite quantité d'eau au quotidien"
          }
        },
        {
          "plantFeatureName": "JeMeRappellePlusDesAutresXD",
          "values": {
            "Petit (insectes)": "La plante à besoins d'une petite quantité d'eau au quotidien"
          }
        },
        {
          "plantFeatureName": "MaisTaComprisLeFormat",
          "values": {
            "Faible": "La plante à besoins d'une petite quantité d'eau au quotidien"
          }
        },
        {
          "plantFeatureName": "OnEnA7Actuellement",
          "values": {
            "Faible": "La plante à besoins d'une petite quantité d'eau au quotidien"
          }
        },
        {
          "plantFeatureName": "BonCourage",
          "values": {
            "Faible": "La plante à besoins d'une petite quantité d'eau au quotidien"
          }
        }
      ],
      "plantationDate": [
        "Janvier",
        "Février",
        "Oct."
      ],
      "harvestDate": [
        "Janvier"
      ]
    },
    "_id": "64906c3a3d47e2e9b3665025",
    "plantId": 1,
    "name": "Tomate-cerise",
    "createdDate": "2023-06-19T14:54:50.161Z",
    "updatedDate": "2023-06-19T14:54:50.161Z",
    "__v": 0
  };

  useEffect(() => {
    //FUNCTION POUR GET LE NOM DE PLANTE DIRECTEMENT DE L'URL ET METTRE DANS LA VARIABLE URLNAME
    getPathName();

    //COLORIE LES DATES SUR LE CALENDRIER SEULEMENT SI DATA
    if (data.attributes.harvestDate) {
      const returnedHarvestDate = data.attributes.harvestDate;
      const months = document.querySelectorAll('.monthHarvestDate');
      months.forEach((month) => {
        const monthName = month.textContent;
        if (returnedHarvestDate.includes(monthName)) {
          month.classList.add('selected');
        }
      });
    }
    if (data.attributes.plantationDate) {
      const returnedPlantationDate = data.attributes.plantationDate;
      const months = document.querySelectorAll('.monthPlantationDate');
      months.forEach((month) => {
        const monthName = month.textContent;
        if (returnedPlantationDate.includes(monthName)) {
          month.classList.add('selected');
        }
      });
    }
  }, [data.attributes.harvestDate, data.attributes.plantationDate])

  const getPathName = () => {
    const pathname = window.location.pathname;
    const name = pathname.split('/');
    setUrlName(name[name.length - 1])
  }

  return (
    <>
      {
        data ? (
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
              </Box>
            </Box>
            <Box className="content-details">
              <Box className="content-wrapper-details">
                {data.attributes.features.map((res, index) => {
                    return (
                      <Box key={index}>
                        <Box>{res.plantFeatureName}</Box>
                        {Object.entries(res.values).map(([key, value]) => (
                          <Box key={key}>
                            {`${key}: ${value}`}
                          </Box>
                        ))}
                      </Box>
                    );
                  }
                )}
              </Box>
            </Box>
            <Box className="content-details">
              <Box className="content-details-carousel">
                <Box className="harvestDate">
                  <Box className="harvestDateTitle">
                    Date de récolte:
                  </Box>
                  <Box className="calendar">
                    <Box className="months">
                      {
                        dateCalendar.months.map((res, index) => (
                          <Box key={index} className="monthHarvestDate">{res.id}</Box>
                        ))
                      }
                    </Box>
                  </Box>
                </Box>
                <Box className="plantationDate">
                  <Box className="plantationDateTitle">
                    Date de plantation:
                  </Box>
                  <Box className="calendar">
                    <Box className="months">
                      {
                        dateCalendar.months.map((res, index) => (
                          <Box key={index} className="monthPlantationDate">{res.id}</Box>
                        ))
                      }
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        ) : (
          ''
        )
      }
    </>
  );
}

export default Details;
