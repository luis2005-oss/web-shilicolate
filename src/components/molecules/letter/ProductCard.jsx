import { useState } from "react";
import { useCart } from "../../../context/CartContext";
import { formatPrice } from "../../utils/formatPrice";


export function ProductCard({ product }) {

  const [flipped,setFlipped] = useState(false);
  const { addToCart } = useCart();

  return (

    <div
      style={{perspective:"1000px",height:"280px"}}
      onMouseEnter={()=>setFlipped(true)}
      onMouseLeave={()=>setFlipped(false)}
    >

      <div
        style={{
          position:"relative",
          width:"100%",
          height:"100%",
          transformStyle:"preserve-3d",
          transition:"transform 0.6s",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)"
        }}
      >

        {/* FRENTE */}

        <div
          style={{
            backfaceVisibility:"hidden",
            position:"absolute",
            inset:0,
            borderRadius:"20px",
            background:"#CCA157",
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"center",
            padding:"20px"
          }}
        >

          <img
            src={product.URL}
            alt={product.name}
            style={{
              width:"90px",
              height:"90px",
              objectFit:"contain",
              marginBottom:"10px"
            }}
          />

          <h3 style={{color:"#472315"}}>
            {product.name}
          </h3>

        </div>

        {/* REVERSO */}

        <div
          style={{
            backfaceVisibility:"hidden",
            position:"absolute",
            inset:0,
            transform:"rotateY(180deg)",
            borderRadius:"20px",
            background:"#472315",
            color:"#fff",
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"center",
            padding:"24px",
            gap:"10px"
          }}
        >

          <h3>{product.name}</h3>

          <p style={{fontSize:"12px",textAlign:"center"}}>
            {product.desc}
          </p>

          <div
            style={{
              fontSize:"24px",
              fontWeight:700
            }}
          >
            {formatPrice(product.price)}
          </div>

          <button
            onClick={() => addToCart(product)}
            style={{
              background:"#fff",
              color:"#472315",
              border:"none",
              borderRadius:"30px",
              padding:"10px 20px",
              fontWeight:700,
              cursor:"pointer"
            }}
          >
            🛒 Agregar al carrito
          </button>

        </div>

      </div>

    </div>

  );
}