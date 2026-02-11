import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter";

function ShoppingList({ items = [] }) {
  // We add local state so that when the test renders <ShoppingList /> 
  // without props, the search bar still works as a 'controlled input'.
  const [localSearch, setLocalSearch] = useState("");
  const [localCategory, setLocalCategory] = useState("All");

  const itemsToDisplay = items.filter((item) => {
    const nameMatch = item.name.toLowerCase().includes(localSearch.toLowerCase());
    const categoryMatch = localCategory === "All" || item.category === localCategory;
    return nameMatch && categoryMatch;
  });

  return (
    <div className="ShoppingList">
      <Filter
        search={localSearch}
        onSearchChange={setLocalSearch}
        selectedCategory={localCategory}
        onCategoryChange={setLocalCategory}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;