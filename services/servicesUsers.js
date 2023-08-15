
const getAllUsers = (req, res) => {
  const {limit, offset} = req.query;
  if(limit && offset) {
    res.json({
      'limit': limit,
      'offset': offset
    })
  } else {
    res.send('No hay parametros')
  }
}

module.exports = {
  getAllUsers
}
