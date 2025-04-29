const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/report', (req, res) => {
    const { name, reason, time } = req.body;

    console.log(`[ANTI-CHEAT] ${name} reported for ${reason} at ${new Date(time * 1000)}`);

    res.status(200).json({ message: "Report received successfully." });
});

app.get('/', (req, res) => {
    res.send("Anti-Cheat API is running.");
});

app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}`);
});