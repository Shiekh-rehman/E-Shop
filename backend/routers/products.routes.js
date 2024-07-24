import express from 'express'
const router = express.Router()
import { createproduct,
    getallproducts,
    getproductbyid,
    updateproduct,
    deleteproduct

} from "../controllers/products.controller.js"


router.route('/product/new').post(createproduct)
router.route('/product/update').put(updateproduct)
router.route('/product/all').get(getallproducts)
router.route('/product/single').get(getproductbyid)
router.route('/product/delete').delete(deleteproduct)




export default router