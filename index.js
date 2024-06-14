const express = require('express');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nghfy93.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
console.log(uri);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server
    await client.connect();

    const spotCollection = client.db('spotDB').collection('spot');
    const countryCollection = client.db('spotDB').collection('country');
    const userSpotCollection = client.db('spotDB').collection('userspot');

   
    
    app.get('/spot/:id', (req, res) => {
      const spotId = req.params.id;
      const spot = spotData.find((s) => s.id === spotId);
    
      if (spot) {
        res.json(spot);
      } else {
        res.status(404).send('Spot not found');
      }
    });
    




    // SPOT API
    app.get('/spot', async (req, res) => {
      const { sort = 'asc' } = req.query;
      const sortOrder = sort === 'asc' ? 1 : -1;
      const cursor = spotCollection.find().sort({ averagecost: sortOrder });
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get('/spot', async (req, res) => {
      const cursor = spotCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });


    app.get('/spot/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await spotCollection.findOne(query);
      res.send(result);
    });

    app.post('/spot', async (req, res) => {
      const newSpot = req.body;
      const result = await spotCollection.insertOne(newSpot);
      res.send(result);
    });

    // COUNTRY API
    app.get('/country', async (req, res) => {
      const cursor = countryCollection.find();
      const country = await cursor.toArray();
      res.send(country);
    });

    app.get('/country/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await countryCollection.findOne(query);
      res.send(result);
    });

    // USER SPOT COLLECTION API
    app.get('/userspot', async (req, res) => {
      const cursor = userSpotCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get('/userspot/:id', async(req ,res) =>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await userSpotCollection.findOne(query);
      res.send(result);
    })

    app.post('/userspot', async (req, res) => {
      const newUserSpot = req.body;
      const result = await userSpotCollection.insertOne(newUserSpot);
      res.send(result);
    });

    app.delete('/userspot/:id',async(req ,res) =>{
      const id = req.params.id;
      const query ={_id: new ObjectId(id)}
      const result = await userSpotCollection.deleteOne(query);
      res.send(result);
    })


  app.put('/userspot/:id', async (req, res) => {
    const id = req.params.id;
    const filter = { _id: new ObjectId(id) };
    const updatedSpot = req.body;
    const updatedFields = {
        $set: {
            userName: updatedSpot.userName,
            email: updatedSpot.email,
            spotName: updatedSpot.spotName,
            countryName: updatedSpot.countryName,
            location: updatedSpot.location,
            description: updatedSpot.description,
            image: updatedSpot.image,
            averagecost: updatedSpot.averagecost,
            traveltime: updatedSpot.traveltime,
            totalvisitors: updatedSpot.totalvisitors,
            seasonality: updatedSpot.seasonality
        }
    };
    const result = await userSpotCollection.updateOne(filter, updatedFields); // Assuming userSpotCollection is your collection name
    res.send(result);
});



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('tourism store server is running');
});

app.listen(port, () => {
  console.log(`tourism server is running on port: ${port}`);
});
