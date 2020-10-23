import Home from '../atom/page/list-restaurant';
import Favorite from '../atom/page/favorite';
import Detail from '../atom/page/detail';

const routes = {
  '/': Home,
  '/home': Home,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
