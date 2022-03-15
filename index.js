const express = require('express');
let app = express();
let PORT = 8000;

app.use(logger);
// rotes

app.get('/books', (req, res) => {
  res.send({ route: req.path });
});

app.get('/libraries', checkPermission('librarian'), (req, res) => {
    return res.send({ route: req.path, permission: req.permission });
});

app.get('/authors', checkPermission('author'), (req, res) => {
    return res.send({ route: req.path, permission: req.permission });
});


// middlewares

function logger(req, res, next) {
  console.log(req.path);
  next();
}

function checkPermission(user) {
  return (req, res, next) => {
    if (user === 'librarian' && req.path === '/libraries') {
      req.permission = true;
    } else if (user === 'author' && req.path === '/authors') {
      req.permission = true;
    } else {
      console.log('permission denied');
    }
    next();
  };
}

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
