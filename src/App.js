import { useState } from "react";
import ProductTable from "./components/ProductTable";
import SearchBar from "./components/SearchBar";
import { fruits } from "./data/fruite-data";

function App() {
  const products = fruits;
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  return (
    <div className="products_table_container">
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockChange={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}

export default App;
