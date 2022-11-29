const express = require('express');
const app = express();

// This app object has some methods
// app.get()
// app.post()
// app.put()
// app.delete()

app.get('/', (req, res) => {        // ('PATH / URL', Callback function)
    res.send('Hello World!');
});

app.get('/api/courses', (req, res) => {
    res.send([1,2,3]);
});

app.listen(3000, () => console.log('listening on port 3000'));