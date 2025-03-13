import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import postsRouter from './routes/posts.js';
import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';
const app = express();
const port = process.env.PORT || 8000;

// Get the current file URL and convert it to a path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Logger middleware
app.use(logger);


// setup static folder
 app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
    //  res.send('<h1>Hello World</h1>');
    // res.send({ message: 'hello World' } )
    // res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'about.html'));
// });


// Routes
app.use('/api/posts', postsRouter); 

app.use(notFound);

// Error middleware
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
