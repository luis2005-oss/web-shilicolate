import { useState } from "react";
import { ProductCard } from "../../molecules/letter/ProductCard";

const products = [
  { idProduct: 1, name: "Producto 1", category: "Categoría 1", price: 5, URL: "/TREND-PRODUCTS1.png", desc: "texto por definir.", color: "#552D19" },
  { idProduct: 2, name: "Producto 2", category: "Categoría 2", price: 5, URL: "/TREND-PRODUCTS1.png", desc: "texto por definir.", color: "#552D19" },
  { idProduct: 3, name: "Producto 3", category: "Categoría 3", price: 5, URL: "/TREND-PRODUCTS1.png", desc: "texto por definir.", color: "#552D19" },
  { idProduct: 4, name: "Producto 4", category: "Categoría 4", price: 5, URL: "/TREND-PRODUCTS1.png", desc: "texto por definir.", color: "#552D19" },
  { idProduct: 5, name: "Producto 5", category: "Categoría 5", price: 5, URL: "/TREND-PRODUCTS1.png", desc: "texto por definir.", color: "#552D19" },
  { idProduct: 6, name: "Producto 6", category: "Categoría 1", price: 5, URL: "/TREND-PRODUCTS1.png", desc: "texto por definir.", color: "#552D19" },
  { idProduct: 7, name: "Producto 7", category: "Categoría 2", price: 5, URL: "/TREND-PRODUCTS1.png", desc: "texto por definir.", color: "#552D19" },
  { idProduct: 8, name: "Producto 8", category: "Categoría 4 ", price: 5, URL: "/TREND-PRODUCTS1.png", desc: "texto por definir.", color: "#552D19" },
];

const categories = ["Todos","Categoría 1","Categoría 2","Categoría 3","Categoría 4","Categoría 5"];

export function ProductCatalog({ addToCart }) { 

  const [activeCategory,setActiveCategory] = useState("Todos");

  const filtered =
    activeCategory === "Todos"
      ? products
      : products.filter(p => p.category === activeCategory);

  return (

    <>
      <div className="flex flex-wrap justify-center gap-3 mb-8">

        {categories.map(cat => (

          <button
            key={cat}
            onClick={()=>setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full border text-sm font-semibold
              ${activeCategory === cat
                ? "bg-[#462114] text-white border-[#CCA047]"
                : "bg-white text-[#462114]"
              }`}
          >
            {cat}
          </button>

        ))}

      </div>

      <div
        className="grid gap-6"
        style={{
          gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))"
        }}
      >

        {filtered.map(product => (

          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />

        ))}

      </div>
    </>

  );
}