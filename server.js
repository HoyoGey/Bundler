const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

console.log('🚀 Server started!');

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/plain');
    res.sendFile(path.join(__dirname, 'dist', 'main.lua'));
    console.log('📜 Script served: /dist/main.lua');
});

app.listen(PORT, () => {
    console.log(`🌐 Server is running on http://localhost:${PORT}`);
});
