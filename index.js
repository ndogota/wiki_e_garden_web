const mongoose = require('mongoose');
const keys = require('./config/keys');
const PlantFeature = require('./models/plant-feature.model');
const Plants = require('./models/plant.model');

mongoose.connect(keys.mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// async function addDataBase() {
//   const plantFeatures = await PlantFeature.find();
//   console.log(plantFeatures);
// }

async function getPlants() {
  const plants = await Plants.find();
  console.log(plants);
}

getPlants().then(process.exit);


// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({extended: true}));
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());
// app.use(bodyParser.text({type: 'text/*'}));
//
// app.get('/pokemons', (req, res) => {
//   // res.status(200).json(pokemons);
//   res.send('Liste des pokemons');
// });
//
// const PORT = process.env.PORT || 5000;
// app.listen(PORT);
// console.log('Listening at http://localhost:5000/');
