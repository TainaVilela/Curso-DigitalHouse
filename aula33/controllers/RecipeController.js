const { Recipe, Sequelize } = require('../models');

// exportar metodos do controller
module.exports = {
  async index(req, res, next){
    let { word = '', page = 1 } = req.query;
    page = parseInt(page)
    let limit = 10;

    let {count: size, rows: recipes} = await Recipe.findAndCountAll({
      where: {
        message: { [Sequelize.Op.like]: `%${word}%` }
      },
      order: ['id'],
      limit: limit,
      offset: ((page - 1) * limit)
    });

    let totalPages = Math.ceil(size / limit);

    res.render('recipes', { recipes, user: req.session.user, page, totalPages, word });
  },

  async save(req, res, next){
    let recipe = { ...req.body };
    await Recipe.create(recipe);

    res.redirect('/recipes');
  },

  async edit(req, res, next){
    let id = req.params.id;

    // obter a receita para altera-la
    let recipe = await Recipe.findByPk(id);

    res.render('edit-recipe', { recipe, user: req.session.user });
  },

  async update(req, res, next){
    let id = req.params.id;
    let { name, email, message } = req.body;

    // obter a receita para altera-la
    let recipe = await Recipe.findByPk(id);  
    
    recipe.update({
      name,
      email,
      message
    });

    res.render('edit-recipe', { recipe, updated: true });
  },

  async delete(req, res, next){
    let id = req.params.id;

    // obter a receita para altera-la
    let recipe = await Recipe.findByPk(id);  

    recipe.destroy();

    res.redirect('/recipes');
  }
}
