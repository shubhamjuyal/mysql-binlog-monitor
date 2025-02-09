const express = require('express');
const { startLogMonitoring } = require('./sql-service');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);

    // starts monitoring as soon as server starts
    startLogMonitoring();
});
