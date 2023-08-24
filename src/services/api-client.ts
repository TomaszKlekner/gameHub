import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '179044740d0042b080b43263ad1d0600',
  },
});
