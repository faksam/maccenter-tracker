import * as express from 'express';

import CatCtrl from './controllers/cat';
import TrackerCtrl from './controllers/device';
import UserCtrl from './controllers/user';
import Cat from './models/cat';
import User from './models/user';
import Device from './models/device';

export default function setRoutes(app) {

  const router = express.Router();

  const catCtrl = new CatCtrl();
  const deviceCtrl = new TrackerCtrl();
  const userCtrl = new UserCtrl();

  // Cats
  router.route('/cats').get(catCtrl.getAll);
  router.route('/cats/count').get(catCtrl.count);
  router.route('/cat').post(catCtrl.insert);
  router.route('/cat/:id').get(catCtrl.get);
  router.route('/cat/:id').put(catCtrl.update);
  router.route('/cat/:id').delete(catCtrl.delete);

  // Trackers
  router.route('/devices').get(deviceCtrl.getAll);
  router.route('/devices/count').get(deviceCtrl.count);
  router.route('/device').post(deviceCtrl.insert);
  router.route('/device/:id').get(deviceCtrl.get);
  //router.route('/device/search').get(deviceCtrl.get);
  router.route('/device/track').get(deviceCtrl.track);
  router.route('/track').post(deviceCtrl.track);
  router.route('/device/:id').put(deviceCtrl.update);
  router.route('/device/:id').delete(deviceCtrl.delete);

  // Users
  router.route('/login').post(userCtrl.login);
  router.route('/users').get(userCtrl.getAll);
  router.route('/users/count').get(userCtrl.count);
  router.route('/user').post(userCtrl.insert);
  router.route('/user/:id').get(userCtrl.get);
  router.route('/user/:id').put(userCtrl.update);
  router.route('/user/:id').delete(userCtrl.delete);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
