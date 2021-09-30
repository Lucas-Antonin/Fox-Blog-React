'use strict';

const { products } = require('../models/productsModel');
const sequelize = require('../../config/databaseConfiguration');

/**
 * Find product with given id
 */
module.exports.findById = async (productId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await products.findByPk(productId);
            resolve(result);
        } catch (e) {
            reject(e);
        }
    });
}

/**
 * List and filter products
 */
module.exports.list = async (queryLimit, queryOffset, orderByField, orderByDirection) => {
    return new Promise(async (resolve, reject) => {
        try {
            if(!orderByField) orderByField = 'id';
            if(!orderByDirection) orderByDirection = 'ASC';

            let result = await products.findAll({
                offset: queryLimit,
                limit: queryOffset,
                order: [
                    [orderByField, orderByDirection]
                ]
            });
            resolve(result);
        } catch (e) {
            reject(e);
        }
    });
}

/**
 * Find product with given id and update it's data
 */
module.exports.create = async (productName, productPrice, isPerishable, voidAt, manufacturedAt) => {
    return new Promise(async (resolve, reject) => {
        const transactionMethod = await sequelize.transaction();

        try {
            let result = await products.create(
                {
                    name : productName,
                    price : productPrice,
                    is_perishable : isPerishable,
                    void_at : voidAt,
                    manufactured_at : manufacturedAt,
                },
                {
                    transaction: transactionMethod
                },
            );
            await transactionMethod.commit();
            resolve(result);
        } catch (e) {
            await transactionMethod.rollback();
            reject(e);
        }
    });
}

/**
 * Find product with given id and update it's data
 */
module.exports.update = async (productId, name, price, isPerishable, voidAt, manufacturedAt) => {
    return new Promise(async (resolve, reject) => {
        const transactionMethod = await sequelize.transaction();

        try {
            let result = await products.update(
                {
                    name : name,
                    price : price,
                    is_perishable : isPerishable,
                    void_at : voidAt,
                    manufactured_at : manufacturedAt,
                },
                {
                    where : {
                        id : productId
                    },
                    transaction: transactionMethod
                },
            );
            await transactionMethod.commit();
            resolve(result);
        } catch (e) {
            await transactionMethod.rollback();
            reject(e);
        }
    });
}

/**
 * Find product with given id and remove it
 */
module.exports.delete = async (productId) => {
    return new Promise(async (resolve, reject) => {
        const transactionMethod = await sequelize.transaction();

        try {
            let result = await products.destroy({
                where: {
                    id: productId
                },
                transaction: transactionMethod
            });
            await transactionMethod.commit();
            resolve(result);
        } catch (e) {
            await transactionMethod.rollback();
            reject(e);
        }
    });
}