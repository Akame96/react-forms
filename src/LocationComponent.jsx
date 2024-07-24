import { UseCurretLocation } from "./UseCurrentLocation";


export function LocationComponent() {
  const { location, error, loading, getLocation } = UseCurretLocation()

  return (
    <div>
      <h1>Current Location</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {location && (
        <div>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      )}
      <button onClick={getLocation}>Get Location</button>
    </div>
  );
}


