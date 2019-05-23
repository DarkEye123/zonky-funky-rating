import filter from 'lodash.filter';
import axiosClient from '../../../api';

async function averageLoanAmount(parent, { rating }) {
  const { data } = await axiosClient.get('/marketplace');
  const filtered = filter(data, { rating });
  const finalVal = filtered.reduce((acc, e) => acc + e.amount, 0);
  return finalVal / filtered.length;
}

export default averageLoanAmount;
