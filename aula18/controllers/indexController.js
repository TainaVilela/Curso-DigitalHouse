const indexController={
showSobre: (req, res)=>{
    res.render('sobre', { nomeDoVisitante: "XXX"});
    },
    showIndex: (req, res)=>{
        res.render('index', {title: 'Express'});
        }
}
module.exports = indexController;