/**
 * Base service class that handles the interaction with the db 
 * framework.
 */
module.exports = class Service {
  
  /**
   * Default constructor.
   * 
   * @param {Mongoose.Model} model db entity model to use.
   */
  constructor(model) {
    /**
     * Mongo db model schema.
     */
    this.model = model

    this.modelName = model.modelName
  }

  /**
   * Find all filtered objects.
   * 
   * @param {object} filters search criteria.
   */
  async find(filters) {
    return await this.model.find(filters)
  }

  /**
   * Find one filtered object.
   * 
   * @param {object} filters search criteria.
   */
  async findOne(filters) {
    return await this.model.findOne(filters)
  }

  /**
   * Find an object by id.
   * 
   * @param {string} id mongo object id
   */
   async findById(id) {
    return await this.model.findById(id)
  }

  /**
   * Creates a new object in the database.
   * 
   * @param {object} object data of the model to create.
   */
  async create(object) {
    return this.model.create(object)
  }

  /**
   * Updates an object in database by id.
   * 
   * @param {string} id mongo object id.
   * @param {object} object 
   */
  async update(id, object) {
    await this.model.updateOne({ _id: id }, object )
    return object
  }

  /**
   * Deletes an object on databse by id.
   * 
   * @param {string} id mongo object id.
   */
  async delete(id) {
    return (await this.model.deleteOne({ _id: id })).ok == 1
  }
}