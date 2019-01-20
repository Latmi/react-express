const express = require('express');
const app = express();
const port = 5000;

app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, firstName: 'Serg', lastName: 'Bezuglyy'},
        {id: 2, firstName: 'Sergio', lastName: 'DGN'},
        {id: 3, firstName: 'Latmi', lastName: 'Bezuglyy'},
    ];
    res.json(customers);
});

app.listen(port, () => console.log(`Server started on port ${port}`));