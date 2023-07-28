const express = require("express");
const app = express();

const admin = require("firebase-admin");
const credentials = require("./key.json");

admin.initializeApp({
    credential: admin.credential.cert(credentials)
});

const db = admin.firestore();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/spots", (req, res) => {
    const spotsRef = db.collection("spots");
    
    spotsRef.get()
      .then((snapshot) => {
        const spotsData = [];
        snapshot.forEach((doc) => {
          spotsData.push(doc.data());
        });
        //res.json(spotsData);
        console.log(spotsData);
      })
      .catch((error) => {
        console.error("Error getting spots collection:", error);
        res.status(500).send("Error retrieving spots");
    });
});

app.post('/data', (req, res) => {
    console.log('Received sensor data:', req.body);
    res.sendStatus(200);
    const key = parseInt(Object.keys(req.body)[0]);
    
    // Convert the key from ASCII to character
    const character = String.fromCharCode(key);
    
    console.log('Parsed sensor data:', character);

    const parkingCenterRef = db.collection('parkingcenters').doc('NsTLzu7lFoZDQrjaQAaRAyZf47V2');
    parkingCenterRef.update({ available: parseInt(character) })
        .then(() => {
            console.log('Parking center updated successfully');
            //res.sendStatus(200);
        })
        .catch((error) => {
            console.error('Error updating parking center:', error);
            res.sendStatus(500);
        });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})
