import express from 'express';
import cors from 'cors';

// module js  common js wo require wala hota hai
const app = express();
app.use(express.static('dist'));

app.get('/',(req,res)=>{
    res.send('Server is ready');
});
// get a list of 5 jokes
app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id : 1,
            title : 'A joke',
            content : ' Now thats a joke',

        },
        {
            id : 2,
            title : 'Another joke',
            content : 'Now this is too funny',
        }

    ]
    res.send(jokes);
})
const port = process.env.PORT  || 3000;
app.listen(port,()=>{
    console.log(`Server is listening at port http://localhost:${port}`);
})

