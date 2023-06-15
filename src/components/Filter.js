import React from "react";

function Filter({
    filteredProperties,
    priceCategory,
    typeCategory,
    operationCategory,
    onPriceCategoryChange,
    onOperationCategoryChange,
    onTypeCategoryChange
}) {

    return (
        <>
          
            <div className="Filter">
                <form className="form-inline">
                    <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">Price</label>
                    <select
                        className="custom-select mb-2 mr-sm-2 mb-sm-0"
                        id="inlineFormCustomSelect"
                        name="filter"
                        value={priceCategory}
                        onChange={(e) => onPriceCategoryChange(e.target.value)}
                    >
                        <option value="All">Filter by Price</option>
                        <option value="150000">- than $150K</option>
                        <option value="300000">+ than $300K</option>
                        <option value="450000">+ than $450K</option>
                    </select>
                    <label className="mr-sm-2" htmlFor="inlineFormCustomSelect2">   Property Type   </label>
                    <select
                        className="custom-select mb-2 mr-sm-2 mb-sm-0"
                        id="inlineFormCustomSelect2"
                        name="filter"
                        value={typeCategory}
                        onChange={(e) => onTypeCategoryChange(e.target.value)}  >
                        <option value="All">Filter by Type</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Condo">Condo</option>
                        <option value="Farm">Farm</option>
                        <option value="Land">Land</option>
                        <option value="Townhome">Townhome</option>
                        <option value="House">House</option>
                    </select>
                    <label className="mr-sm-2" htmlFor="inlineFormCustomSelect3">Sale or Rent?</label>
                    <select
                        className="custom-select mb-2 mr-sm-2 mb-sm-0"
                        id="inlineFormCustomSelect3"
                        name="filter"
                        value={operationCategory}
                        onChange={(e) => onOperationCategoryChange(e.target.value)}         >
                        <option value="All">Filter by Operation</option>
                        <option value="1">Sale</option>
                        <option value="2">Rent</option>
                    </select>
                </form>
            </div>
            <h5>Found {filteredProperties.length} matching properties</h5>
        </>

    );
}
export default Filter;