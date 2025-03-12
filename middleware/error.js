const errorHandler = (err, req, res, next) => {
    if (err.status) {
        err.status(err.status).send( { message: err.message });
    } else {
        res.status(500).send( { message: err.message });
    }
}

export default errorHandler;