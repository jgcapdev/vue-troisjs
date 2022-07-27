export default {
  async fetchCryptos(context, data) {
    const response = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    context.commit('setCryptos', responseData);
  },
  fetchScene(context, data) {
    context.commit('setScene', data);
  },
};
