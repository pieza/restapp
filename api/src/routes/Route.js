const express = require('express')
const {ensureAuthenticated} = require('../auth');
const BitacoraService = require('../services/bitacora.service');

/**
 * Base router class, contains the base CRUD endpoints 
 * based on a service.
 */
module.exports = class Route {

  /**
   * Default constructor.
   * 
   * @param {Express.Router} router express router to be used.
   * @param {Service} service       service impl class of the model.
   */
  constructor(path, service) {

    /**
     * Base path for this router
     */
    this.path = path

    /**
     * Express router used to register the routes.
     */
    this.router = express.Router()

    /**
     * Service impl to use.
     */
    this.service = service

    /**
     * Service to log database transactions.
     */
    this.bitacora = new BitacoraService()

    /**
     * GET /
     * 
     * Return a list of entries filtered.
     */
    this.router.get(this.path, async (req, res, next) => {
      try {
        let filters = req.query ? req.query : {}
        let result = await this.service.find(filters)

        return res.status(200).json(result)
      } catch (error) {
        next(error)
      }
    })

    /**
     * GET /:id
     * 
     * Return one object by the model id.
     */
    this.router.get(`${this.path}/:id`
    , async (req, res, next) => {
      try {
        const id = req.params.id
        let result = await this.service.findById(id)

        return res.status(200).json(result)
      } catch (error) {
        next(error)
      }
    })

    /**
     * POST /
     * 
     * Creates an object to the database and return it.
     */
    this.router.post(this.path, ensureAuthenticated, async (req, res, next) => {
      try {
        let object = await this.service.create(req.body)
        this.bitacora.log(this.service.modelName, "INSERT", object, req.user._id)
        return res.status(200).json(object)
      } catch (error) {
        next(error)
      }
    })

    /**
     * PUT /:id
     * 
     * Updates an object in the database and return it.
     */
    this.router.put(`${this.path}/:id`, ensureAuthenticated, async (req, res, next) => {
      try {
        const id = req.params.id
        let object = await this.service.update(id, req.body)
        this.bitacora.log(this.service.modelName, "UPDATE", object, req.user._id)
        return res.status(200).json(object)
      } catch (error) {
        next(error)
      }
    })

    /**
     * DELETE /:id
     * 
     * Deletes an object in the database and return the result.
     */
    this.router.delete(`${this.path}/:id`, ensureAuthenticated, async (req, res, next) => {
      try {
        const id = req.params.id
        let object = await this.service.delete(id, req.body)
        this.bitacora.log(this.service.modelName, "DELETE", object, req.user._id)
        return res.status(200).json(object)
      } catch (error) {
        next(error)
      }
    })
  }
}
