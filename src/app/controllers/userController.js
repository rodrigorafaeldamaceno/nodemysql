const pool = require('../../database/poolFactory')



const userController = {
  async show(req, res, next) {
    req.connection.query('SELECT * FROM Clientes', (err, users) => {
      if (err) return next(err)

      return res.json(users)
    })
  },
  async store(req, res, next) {

    const {
      name,
      cpf
    } = req.body

    const sql = `INSERT INTO Clientes(Nome,CPF) VALUES ('${name}', '${cpf}')`

    req.connection.query(sql, (err, users) => {
      if (err) return next(err)

      return res.json({
        name, cpf
      })
    })

  }
}

module.exports = userController