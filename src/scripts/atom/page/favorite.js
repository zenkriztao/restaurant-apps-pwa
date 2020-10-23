import FavoriteRestaurantDB from '../../data/db';
import template from '../template/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="container">
        <h2 class="text-heading">Restaurant favorit kamu</h2>
        <div id="restaurant">

        </div>
        </div>
      </div>`;
  },

  async afterRender() {
    const data = await FavoriteRestaurantDB.getAllRestaurants();
    const listContainer = document.querySelector('#restaurant');

    if (data.length === 0) {
      listContainer.innerHTML = `
        <h3>Kamu belum memiliki daftar restaurant favorit</h3>`;
    } else {
      data.forEach((restaurant) => {
        listContainer.innerHTML += template.restaurantItemTemplate(restaurant);
      });
    }
  },
};

export default Favorite;
