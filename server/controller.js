axios = require('axios')



module.exports = {
    getProducts: (req, res) => {
        const db = req.app.get('db');
        db.find_products()
        .then(products => {res.status (200).send(products)})
    }
}