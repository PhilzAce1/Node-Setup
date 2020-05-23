const bodyParser = require('body-parser');
module.exports = (app) => {
  app.use(require('helmet')());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(require('compression')());
  app.use(require('cors')({ credentials: true, origin: true }));
};
