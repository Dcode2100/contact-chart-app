import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useCountryStats } from '../services/covid';
import 'leaflet/dist/leaflet.css';
import markersvg from "../assets/market.svg";
import L from 'leaflet'; // Import Leaflet

const CovidWorldMap = () => {
  const { data: countryStats, isLoading } = useCountryStats();
  const mapRef = useRef(null);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    if (selectedCountry && mapRef.current) {
      const { lat, long } = selectedCountry.countryInfo;
      mapRef.current.setView([lat, long], 6);
    }
  }, [selectedCountry]);

  // Create a custom icon for your SVG
  const customIcon = new L.Icon({
    iconUrl: markersvg,
    iconSize: [12, 12], // Set the size of your SVG icon
    iconAnchor: [6, 12], // Adjust the anchor point if needed
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='relative h-full w-full flex items-center justify-center'>
      <MapContainer
        ref={mapRef}
        center={[0, 0]}
        zoom={2}
        dragging={true}
        scrollWheelZoom={false}
        style={{ height: '550px', width: '100%', zIndex: '1' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        {countryStats.map((country) => (
          <Marker
            key={country.country}
            position={[country.countryInfo.lat, country.countryInfo.long]}
            eventHandlers={{
              click: () => setSelectedCountry(country),
            }}
            icon={customIcon}
          >
            {selectedCountry === country && (
              <Popup>
                <div className="">
                  <div className='flex gap-4 justify-center items-center'>
                    <h2>{country.country}</h2>
                    <img className="w-[2rem] h-[2rem]" src={country.countryInfo.flag} alt={country.country} />
                  </div>
                  <p className="font-bold">Total Cases: {country.cases}</p>
                  <p className="font-bold">Recovered: {country.recovered}</p>
                  <p className="font-bold">Deaths: {country.deaths}</p>
                </div>
              </Popup>
            )}
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default CovidWorldMap;
