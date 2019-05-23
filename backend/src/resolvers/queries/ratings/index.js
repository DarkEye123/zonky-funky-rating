import axiosClient from '../../../api';

const cache = new Set();

async function ratings() {
  const { data } = await axiosClient.get('/marketplace');
  if (cache.size === 0) {
    data.forEach(e => cache.add(e.rating));
  }
  return [...cache];
}

export default ratings;
