const express = require('express');
const app = express();

app.get('/getData', (req,res) => {
    res.json({
        "statusCide":200,
        "statusMessage":"SUCCESS"
    })
})
// Start the server
app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});

