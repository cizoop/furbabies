  maptilersdk.config.apiKey = mapToken; // your key
  
  const map = new maptilersdk.Map({
    container: 'map',
    style: maptilersdk.MapStyle.STREETS, // MapTiler built-in style
    center: listing.geometry.coordinates, // [longitude, latitude]
    zoom: 9,
  });

  console.log(listing.geometry.coordinates);
  // Add a marker
  const marker=new maptilersdk.Marker({ color: "red" })
    .setLngLat(listing.geometry.coordinates)
    .setPopup(new maptilersdk.Popup().setHTML(`<h4>${listing.location}🐾</h4>`))
    .addTo(map);

