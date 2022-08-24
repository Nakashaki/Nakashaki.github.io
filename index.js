var map = L.map("map").setView([-29.609988, 28.233608], 5);
var Stadia_OSMBright = L.tileLayer(
  "https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png",
  {
    maxZoom: 20,
    attribution:
      '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
  }
);

Stadia_OSMBright.addTo(map);

var johannesburg = L.marker([-26.194731, 28.27999]).addTo(map);
var durban = L.marker([-29.761753, 31.026276]).addTo(map);
var capetown = L.marker([-33.878538, 18.70033]).addTo(map);

durban
  .bindPopup(
    "<b>Durban <br> Unit 4b, 50 Moreland Drive, Rinaldo Industrial Park, Redhill 4071, Durban, KZN."
  )
  .openPopup();
johannesburg
  .bindPopup("<b>Johannesburg <br> 99 Skew Road, 1459, Boksburg, Gauteng")
  .openPopup();
capetown
  .bindPopup(
    "<b>Cape Town <br> 111 Kruis Road, Brackenfell, 7560, Cape Town, Western Cape."
  )
  .openPopup();
