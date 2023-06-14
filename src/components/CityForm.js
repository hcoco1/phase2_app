import React, { useEffect, useState } from "react";

const CityForm = () => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedState, setSelectedState] = useState("");

  useEffect(() => {
    fetchCityData();
  }, []);

  const fetchCityData = async () => {
    try {
      const response = await fetch("https://cities-qd9i.onrender.com/cities");
      const data = await response.json();
      setCities(data);
    } catch (error) {
      console.error("Error fetching city data:", error);
    }
  };

  // Render the city select options
  const cityOptions = cities.map((city, index) => (
    <option key={index} value={city.city}>
      {city.city}, {city.state_name}
    </option>
  ));

  // Render the state select options
  const stateOptions = Array.from(new Set(cities.map(city => city.state_name))).map((state, index) => (
    <option key={index} value={state}>
      {state}
    </option>
  ));

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  return (
    <div>
      <label htmlFor="city">City:</label>
      <select id="city" name="city" value={selectedCity} onChange={handleCityChange}>
        <option value="">Select City</option>
        {cityOptions}
      </select>

      <label htmlFor="state">State:</label>
      <select id="state" name="state" value={selectedState} onChange={handleStateChange}>
        <option value="">Select State</option>
        {stateOptions}
      </select>
    </div>
  );
};

export default CityForm;


