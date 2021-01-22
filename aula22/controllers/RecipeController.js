const fs = require("fs");
const path = require("path");

const recipes = require("../data/recipes");

//exportar metodos do controller
module.exports = {
  index(req, res, next){
    res.render('recipes', { recipes: recipes });
  },

  save(req, res, next){
    /* criando um id sequencial, obtendo a
    quantidade de elementos no array recipes e somando + 1 */
    let id = recipes.length + 1;

    /* montando objeto para seguir padrao dentro do arquivo data/recipe.js */
    let recipe = { id, ...req.body };
    
    /* adcionando objeto criado dentro do array recipes */
    recipes.push(recipe);

    /* transformando o array recipes em uma string */
    let dataString = JSON.stringify(recipes);

    /* obtendo o caminho ate o arquivo data/recipe.js */
    let filePath = path.join('data', 'recipe.js');

    /* escrevendo o conteudo arquivo recipe.js */
    fs.writeFileSync(filePath, 'module.exports = ');
    fs.appendFileSync(filePath, dataString);

    res.redirect('/recipes');
  }
}
