import React, { useEffect } from "react";
import Axios from "axios";
import controller from "../../controllers";

import { geoApiKey, ttApiKey } from "../../../apiKeys";

const SearchMap = () => {
  const getUserLocationData = async () => {
    const userLocationData = await Axios.get(
      `https://api.ipgeolocation.io/ipgeo?apiKey=${geoApiKey}`
    );
    return userLocationData.data;
  };

  const setMarkers = (data, map) => {
    data.forEach(location => {
      createMarker(
        "accident.colors-white.png",
        location,
        "#c30b82",
        "PNG icon",
        map
      );
    });
  };

  const createMap = async userLocationData => {
    const longLat = [userLocationData.longitude, userLocationData.latitude];
    var map = await tt.map({
      key: ttApiKey,
      container: "map",
      dragPan: !isMobileOrTablet(),
      style: "tomtom://vector/1/basic-main",
      zoom: 12,
      center: longLat
    });
    map.addControl(new tt.FullscreenControl());
    map.addControl(new tt.NavigationControl());
    map.addControl(new tt.GeolocateControl(), "top-left");
    return map;
  };

  function createMarker(icon, position, color, popupText, map) {
    var markerElement = document.createElement("div");
    markerElement.className = "marker";

    var markerContentElement = document.createElement("div");
    markerContentElement.className = "marker-content";
    markerContentElement.style.backgroundColor = color;
    markerElement.appendChild(markerContentElement);

    var iconElement = document.createElement("div");
    iconElement.className = "marker-icon";
    iconElement.style.backgroundImage =
      "url(https://api.tomtom.com/maps-sdk-for-web/5.x/assets/images/" +
      icon +
      ")";
    markerContentElement.appendChild(iconElement);

    var popup = new tt.Popup({ offset: 30 }).setText(popupText);
    // add marker to map
    new tt.Marker({ element: markerElement, anchor: "bottom" })
      .setLngLat(position)
      .setPopup(popup)
      .addTo(map);
  }

  useEffect(() => {
    (async () => {
      let userLocationData = await getUserLocationData();
      console.log(userLocationData);
      const map = await createMap(userLocationData);
      const availableOffers = await controller.offers.getAllOffers();
      const locations = availableOffers.map(offer => {
        return [
          Number(offer.donor.address.longitude),
          Number(offer.donor.address.latitude)
        ];
      });

      setMarkers(locations, map);
    })();
  }, []);

  return (
    <div id="map" className="map">
      <div></div>
    </div>
  );
};

export default SearchMap;
