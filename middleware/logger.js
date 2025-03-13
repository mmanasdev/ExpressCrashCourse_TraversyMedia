import colors from 'colors';

const logger = (req, res, next) => {
    const methodColors = {
        GET: 'green',
        POST: 'blue',
        PUT: 'yellow',
        DELETE: 'red'
    }

    const color = methodColors[req.method] || colors.white;
    const method = req.method;
    const url = `${req.protocol}://${req.get('host')}${req.originalUrl}`;

    console.log(`${method} ${url}`[color]);
    next();
}

export default logger;