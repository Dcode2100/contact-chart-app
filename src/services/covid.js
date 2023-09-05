
import { useQuery } from 'react-query';

const fetchWorldwideStats = async () => {
  const res = await fetch('https://disease.sh/v3/covid-19/all');
  return res.json();
};

const fetchCountryStats = async () => {
  const res = await fetch('https://disease.sh/v3/covid-19/countries');
  return res.json();
};

const fetchHistoricalData = async () => {
  const res = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
  return res.json();
};

export const useWorldwideStats = () => useQuery('worldwideStats', fetchWorldwideStats);
export const useCountryStats = () => useQuery('countryStats', fetchCountryStats);
export const useHistoricalData = () => useQuery('historicalData', fetchHistoricalData);
