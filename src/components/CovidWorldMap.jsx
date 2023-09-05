import React, { useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useCountryStats } from '../services/covid';
import 'leaflet/dist/leaflet.css';

const CovidWorldMap = () => {
  const { data: countryStats, isLoading } = useCountryStats();

  useEffect(() => {
    console.log(countryStats);
  }, [countryStats]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='relative h-full w-full flex items-center justify-center'>
      <MapContainer
        center={[0, 0]}
        zoom={2}
        dragging={true}
        scrollWheelZoom={false}
        style={{ height: '500px', width: '100%', zIndex: "1" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        {countryStats.map((country) => (
          <Marker
            key={country.country}
            position={[country.countryInfo.lat, country.countryInfo.long]}
          >
            <Popup>
              <div className="popup-content">
                <div className='flex gap-4 justify-center items-center'>
                  <h2>{country.country}</h2>
                  <img className="w-[2rem] h-[2rem]" src={country.countryInfo.flag} alt={country.country} />
                </div>
                <p>Total Cases: {country.cases}</p>
                <p>Recovered: {country.recovered}</p>
                <p>Deaths: {country.deaths}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default CovidWorldMap;
