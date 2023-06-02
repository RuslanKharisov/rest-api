const uuid = require('uuid')
const path = require('path')
const fs = require ('fs')
const {Product, ProductInfo} = require('../models/models')
const ApiError = require('../error/ApiError')

class ProductController {

    async create(req, res, next) {
        try {
            let {sku ,title, price, materialId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const product = await Product.create({sku, title, price, materialId, typeId, img: fileName})

            if(info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    ProductInfo.create ({
                        title: i.title,
                        description: i.description,
                        productId: product.id
                    })
                ) 
            }

            return res.json(product)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        let {typeId, materialId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let products;
        if (!typeId && !materialId) {
            products = await Product.findAndCountAll({limit, offset})
        }
        if (typeId && !materialId) {
            products = await Product.findAndCountAll({where:{typeId}, limit, offset})
        }
        if (!typeId && materialId) {
            products = await Product.findAndCountAll({where:{materialId}, limit, offset})
        }
        if (typeId && materialId) {
            products = await Product.findAndCountAll({where:{typeId, materialId}, limit, offset})
        }
        return res.json(products) 
    }

    async getOne(req, res, next) {
        try {
            const {id} = req.params
            const product = await Product.findOne(
            {
                where: {id},                
                include: [{ model: ProductInfo, as: 'info' }],
            },
        ) 
            return res.json(product)

        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async deleteOne(req, res, next) {
        try {
            const {id} = req.params
            const product = await Product.findOne({where: {id}})
            if (!product) {
                return next(ApiError.badRequest('Продукт с данным ID не найден'))
            }
            const imageName = product.img            
            await Product.destroy(
                    {
                        where: {id}
                    },
                )
            fs.unlinkSync(path.resolve(__dirname, '..', 'static', imageName))
            return res.json('product with id: ' + id + ' was deleted')            
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}



module.exports = new ProductController()