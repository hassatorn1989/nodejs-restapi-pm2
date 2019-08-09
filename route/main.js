module.exports = function (app){
  app.get('/', (req, res) => {
      res.send('Hello World GET')
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
