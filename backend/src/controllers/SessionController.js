/* index = listagem de sessoes
   show = listar uma unica sessao
    store = criar uma sessao
    update = alterar uma sessao
    destroy  
*/

module.exports = {
 store(req, res) {
    return res.json({ message:'Hello World' })
 }

};