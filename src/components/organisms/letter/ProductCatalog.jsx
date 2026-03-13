import { useState } from "react";
import { ProductCard } from "../../molecules/letter/ProductCard";

const products = [
  /* Chocolate en chapa */
  { idProduct: 1, name: "Chocolate en chapa de 55gr", category: "Chocolate en chapa", price: 4, URL: "/TREND-PRODUCTS1.png", desc: "texto por definir.", color: "#552D19" },
  { idProduct: 2, name: "Chocolate en chapa de 70gr", category: "Chocolate en chapa", price: 5, URL: "/TREND-PRODUCTS1.png", desc: "texto por definir.", color: "#552D19" },
  { idProduct: 3, name: "Chocolate en chapa de 100gr", category: "Chocolate en chapa", price: 7, URL: "/TREND-PRODUCTS1.png", desc: "texto por definir.", color: "#552D19" },
  { idProduct: 4, name: "Chocolate en chapa de 150gr", category: "Chocolate en chapa", price: 9, URL: "/TREND-PRODUCTS1.png", desc: "texto por definir.", color: "#552D19" },
  { idProduct: 5, name: "Chocolate en chapa de 250gr", category: "Chocolate en chapa", price: 15, URL: "/TREND-PRODUCTS1.png", desc: "texto por definir.", color: "#552D19" },
  { idProduct: 6, name: "Chocolate en chapa de 300gr", category: "Chocolate en chapa", price: 18, URL: "/TREND-PRODUCTS1.png", desc: "texto por definir.", color: "#552D19" },
  { idProduct: 7, name: "Chocolate en chapa de 400gr", category: "Chocolate en chapa", price: 24, URL: "/TREND-PRODUCTS1.png", desc: "texto por definir.", color: "#552D19" },
  { idProduct: 8, name: "Chocolate en chapa de 460gr", category: "Chocolate en chapa", price: 28, URL: "/TREND-PRODUCTS1.png", desc: "texto por definir.", color: "#552D19" },
  { idProduct: 9, name: "Chocolate en chapa de 500gr", category: "Chocolate en chapa", price: 30, URL: "/TREND-PRODUCTS1.png", desc: "texto por definir.", color: "#552D19" },

  /* Chocolate en caja */
  { idProduct: 10, name: "Chocolate en caja de 100gr", category: "Chocolate en caja", price: 8, URL: "/TREND-PRODUCTS1.png", desc: "texto por definir.", color: "#552D19" },
  { idProduct: 11, name: "Chocolate en caja de 200gr", category: "Chocolate en caja", price: 14, URL: "/TREND-PRODUCTS1.png", desc: "texto por definir.", color: "#552D19" },

  /* Chocolate en barra */
  { idProduct: 12, name: "Chocolate en barra", category: "Chocolate en barra", price: 9, URL: "/TREND-PRODUCTS1.png", desc: "texto por definir.", color: "#552D19" },

  /* Chocolate */
  { idProduct: 13, name: "Chocolate", category: "Chocolate", price: 6.80, URL: "/TREND-PRODUCTS1.png", desc: "texto por definir.", color: "#552D19" },

  /* Shilibombones */
  { idProduct: 14, name: "Shilibombones", category: "Shilibombones", price: 8, URL: "/TREND-PRODUCTS1.png", desc: "texto por definir.", color: "#552D19" },

  /* Chocolate comestible */
  { idProduct: 15, name: "Chocolate comestible de 70gr", category: "Chocolate comestible", price: 7.50, URL: "/TREND-PRODUCTS1.png", desc: "texto por definir.", color: "#552D19" },
  { idProduct: 16, name: "Chocolate comestible de 35gr", category: "Chocolate comestible", price: 7.50, URL: "/TREND-PRODUCTS1.png", desc: "texto por definir.", color: "#552D19" },

  /* Shilicotejas */
  { idProduct: 17, name: "Shilicoteja de Maracuyá", category: "Shilicotejas", price: 1, URL: "/TREND-PRODUCTS1.png", desc: "texto por definir.", color: "#552D19" },
  { idProduct: 18, name: "Shilicoteja de Maracumago", category: "Shilicotejas", price: 1, URL: "/TREND-PRODUCTS1.png", desc: "texto por definir.", color: "#552D19" },
  { idProduct: 19, name: "Shilicoteja de Naranja", category: "Shilicotejas", price: 1, URL: "/TREND-PRODUCTS1.png", desc: "texto por definir.", color: "#552D19" },
  { idProduct: 20, name: "Shilicoteja de Mandarina", category: "Shilicotejas", price: 1, URL: "/TREND-PRODUCTS1.png", desc: "texto por definir.", color: "#552D19" },
  { idProduct: 21, name: "Shilicoteja de Aguaymanto", category: "Shilicotejas", price: 1, URL: "/TREND-PRODUCTS1.png", desc: "texto por definir.", color: "#552D19" },
  { idProduct: 22, name: "Shilicoteja de Piña", category: "Shilicotejas", price: 1, URL: "/TREND-PRODUCTS1.png", desc: "texto por definir.", color: "#552D19" },
  { idProduct: 23, name: "Shilicoteja de Limón", category: "Shilicotejas", price: 1, URL: "/TREND-PRODUCTS1.png", desc: "texto por definir.", color: "#552D19" },
  { idProduct: 24, name: "Shilicoteja de Tamarindo", category: "Shilicotejas", price: 1, URL: "/TREND-PRODUCTS1.png", desc: "texto por definir.", color: "#552D19" },
  { idProduct: 25, name: "Shilicoteja de Pisco", category: "Shilicotejas", price: 1, URL: "/TREND-PRODUCTS1.png", desc: "texto por definir.", color: "#552D19" },
  { idProduct: 26, name: "Shilicoteja de Vino", category: "Shilicotejas", price: 1, URL: "/TREND-PRODUCTS1.png", desc: "texto por definir.", color: "#552D19" },
  { idProduct: 27, name: "Shilicoteja de Fresa", category: "Shilicotejas", price: 1, URL: "/TREND-PRODUCTS1.png", desc: "texto por definir.", color: "#552D19" },
  { idProduct: 28, name: "Shilicoteja de Mora", category: "Shilicotejas", price: 1, URL: "/TREND-PRODUCTS1.png", desc: "texto por definir.", color: "#552D19" },
  { idProduct: 29, name: "Shilicoteja de Arándano", category: "Shilicotejas", price: 1, URL: "/TREND-PRODUCTS1.png", desc: "texto por definir.", color: "#552D19" },
  { idProduct: 30, name: "Shilicoteja de Sauco", category: "Shilicotejas", price: 1, URL: "/TREND-PRODUCTS1.png", desc: "texto por definir.", color: "#552D19" },
  { idProduct: 31, name: "Shilicoteja de Lúcuma", category: "Shilicotejas", price: 1, URL: "/TREND-PRODUCTS1.png", desc: "texto por definir.", color: "#552D19" },
  { idProduct: 32, name: "Shilicoteja de Pasas", category: "Shilicotejas", price: 1, URL: "/TREND-PRODUCTS1.png", desc: "texto por definir.", color: "#552D19" },
  { idProduct: 33, name: "Shilicoteja de Guindón", category: "Shilicotejas", price: 1, URL: "/TREND-PRODUCTS1.png", desc: "texto por definir.", color: "#552D19" },
  { idProduct: 34, name: "Shilicoteja de Café", category: "Shilicotejas", price: 1, URL: "/TREND-PRODUCTS1.png", desc: "texto por definir.", color: "#552D19" },
  { idProduct: 35, name: "Shilicoteja de Pitahaya", category: "Shilicotejas", price: 1, URL: "/TREND-PRODUCTS1.png", desc: "texto por definir.", color: "#552D19" },
  { idProduct: 36, name: "Shilicoteja de Pecana", category: "Shilicotejas", price: 1, URL: "/TREND-PRODUCTS1.png", desc: "texto por definir.", color: "#552D19" },
  { idProduct: 37, name: "Shilicoteja de Coco", category: "Shilicotejas", price: 1, URL: "/TREND-PRODUCTS1.png", desc: "texto por definir.", color: "#552D19" },
  { idProduct: 38, name: "Shilicoteja de Maní", category: "Shilicotejas", price: 1, URL: "/TREND-PRODUCTS1.png", desc: "texto por definir.", color: "#552D19" },
  { idProduct: 39, name: "Shilicoteja de Almendra", category: "Shilicotejas", price: 1, URL: "/TREND-PRODUCTS1.png", desc: "texto por definir.", color: "#552D19" },
];

const categories = [
  "Todos",
  "Chocolate en chapa",
  "Chocolate en caja",
  "Chocolate en barra",
  "Shilibombones",
  "Shilicotejas"
];

export function ProductCatalog({ addToCart }) {

  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProducts =
    activeCategory === "Todos"
      ? products
      : products.filter(p => p.category === activeCategory);

  const groupedProducts = filteredProducts.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <>
      {/* BOTONES DE FILTRO */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">

        {categories.map(cat => (

          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full border text-sm font-semibold transition
            ${activeCategory === cat
                ? "bg-[#462114] text-white border-[#CCA047]"
                : "bg-white text-[#462114] border-[#462114]"
              }`}
          >
            {cat}
          </button>

        ))}

      </div>

      {/* PRODUCTOS AGRUPADOS */}
      <div className="space-y-14">

        {Object.entries(groupedProducts).map(([category, items]) => (

          <div key={category}>

            <h2 className="text-2xl font-bold text-[#462114] mb-6 border-b pb-2">
              {category}
            </h2>

            <div
              className="grid gap-6"
              style={{
                gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))"
              }}
            >

              {items.map(product => (

                <ProductCard
                  key={product.idProduct}
                  product={product}
                  addToCart={addToCart}
                />

              ))}

            </div>

          </div>

        ))}

      </div>
    </>
  );
}
