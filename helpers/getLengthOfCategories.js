const { pool } = require('../utils/db');

const getLengthOfCategories = async () => {
  const [categories] = await pool.execute('SELECT `category` FROM `tasks`');
  const categoriesCount = [0, 0, 0, 0];

  categories.forEach(({ category }) => {
    switch (category) {
      case 'technologia':
        categoriesCount[0]++;
        break;
      case 'rekreacja':
        categoriesCount[1]++;
        break;
      case 'jedzenie':
        categoriesCount[2]++;
        break;
      case 'osobiste':
        categoriesCount[3]++;
        break;
      default:
        break;
    }
  });

  return {
    technology: categoriesCount[0],
    recreation: categoriesCount[1],
    food: categoriesCount[2],
    personal: categoriesCount[3],
  };
};

module.exports = {
  getLengthOfCategories,
};
