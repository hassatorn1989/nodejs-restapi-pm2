module.exports = function (app, con) {
  app.get('/user', (req, res) => {
    con.connect(function(err) {
     if (err) throw err;
      res.send('connect success')
    });
  });

  app.post('/', (req, res) => {
      res.send('Hello World POST')
  });

  app.put('/update', (req, res) => {
      res.send('Hello World PUT')
  });

  app.delete('/delete', (req, res) => {
      res.send('Hello World Delete')
  });
}
