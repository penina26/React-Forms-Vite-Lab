import React from "react";
import Item from "./Item";
import Filter from "./Filter";

// We set default values (= "") here so the code doesn't crash during tests
function ShoppingList({
  items = [],
  search = "",
  onSearchChange,
  onCategoryChange,
  selectedCategory = "All"
}) {

  const itemsToDisplay = items.filter((item) => {
    // This line won't crash now because 'search' defaults to an empty string
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="ShoppingList">
      <Filter
        search={search}
        onSearchChange={onSearchChange}
        onCategoryChange={onCategoryChange}
        selectedCategory={selectedCategory}
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