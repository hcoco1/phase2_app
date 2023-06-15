import Cards from "./components/Cards";
import Filter from './components/Filter';
import React, { useState, useEffect } from "react";


function CardsContainer() {

  const [properties, setProperties] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [priceCategory, setPriceCategory] = useState("All");
  const [typeCategory, setTypeCategory] = useState("All");
  const [operationCategory, setOperationCategory] = useState("All");

  const handlePriceChange = (value) => {
    setPriceCategory(value);
  };

  const handleTypeChange = (value) => {
    setTypeCategory(value);
  };

  const handleOperationChange = (value) => {
    setOperationCategory(value);
  };



  // Filter the property list based on the selected price category, type category, and operation category
  const filteredProperties = properties.filter((property) => {
    if (
      (priceCategory === "All" || property.listing_price < parseInt(priceCategory)) &&
      (typeCategory === "All" || property.property_type === typeCategory) &&
      (operationCategory === "All" || (operationCategory === "1" && property.operation_type === "Sale") || (operationCategory === "2" && property.operation_type === "Rent"))
    ) {
      return true;
    }
    return false;
  });
  console.log(filteredProperties.length);
  useEffect(() => {
    fetch("https://phase2-db.onrender.com/properties")
      .then((response) => response.json())
      .then((data) => {
        setProperties(data);
        setIsLoaded(true);
      });
  }, []);

  if (!isLoaded) return  <h6>Loading...Because this App is using a free web service as a database, there will
                            be a delay in the response to the first request after a period of inactivity
                            while the instance spins up.</h6>



  let propertyCards = properties.map((property) => {
    return (
      <div className="col">
        <Cards key={property.property_id} address={property.address} city={property.city} state={property.state} zip_code={property.zip_code} listing_price={property.listing_price} bedrooms={property.bedrooms} bathrooms={property.bathrooms} square_feet={property.square_feet} listing_date={property.listing_date} image={property.image} property_type={property.property_type} operation_type={property.operation_type} Property_details={property.Property_details} likes={property.likes} amenities={property.amenities} />
      </div>
    )
  })
  return (
    <div className="container" >
      <Filter
        priceCategory={priceCategory}
        onPriceCategoryChange={handlePriceChange}
        typeCategory={typeCategory}
        onTypeCategoryChange={handleTypeChange}
        operationCategory={operationCategory}
        onOperationCategoryChange={handleOperationChange}
        filteredProperties={filteredProperties}
      />
      <div className="row gy-5 ">
        {propertyCards}
      </div>
    </div>
  )
}
export default CardsContainer;