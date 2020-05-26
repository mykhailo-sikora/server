const {Router} = require('express');
const productRouter = Router();


productRouter.get('/', (req, res) => {
    console.log('req.body');
    res.end('get prod')
});
productRouter.post('/', (req, res) => {
    console.log('req.body');
    res.end('Post prod')
});
productRouter.put('/', (req, res) => {
    console.log('req.body');
    res.end('put prod')
});
productRouter.delete('/:name', (req, res) => {
    const params = req.params;
    const query = req.query;
    //res.end('delete prod')
    res.json({params, query})
});


module.exports = productRouter;
