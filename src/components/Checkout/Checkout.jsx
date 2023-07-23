import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../service/config";
import { collection, addDoc } from "firebase/firestore";
import { CheckoutStyled } from "./CheckoutStyled";
import ItemCheckout from "../ItemCheckout/ItemCheckout";

const Checkout = () => {
  const { carrito, vaciarCarrito, cantidadTotal, total } =
    useContext(CartContext);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [error, setError] = useState("");
  const [orderId, setOrdenId] = useState("");

  const handleForm = (e) => {
    e.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("Por favor complete todos los campos");
      return;
    }

    if (email !== emailConfirmacion) {
      setError("Los campos del email no coinciden, maldito seas!!");
      return;
    }

    const orden = {
      items: carrito.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.title,
        cantidad: producto.cantidad,
      })),
      total: cantidadTotal,
      nombre,
      apellido,
      telefono,
      email,
    };

    addDoc(collection(db, "ordenes"), orden)
      .then((docRef) => {
        setOrdenId(docRef.id);
        vaciarCarrito();
      })
      .catch((error) => {
        console.log("Error al crear la orden", error);
        setError("Se produjo un error al crear la orden, Intente nuevamente");
      });
  };

  return (
    <CheckoutStyled>
      <h2>Finalizar Compra</h2>
      <div className="detail-box">
        <div>
        {carrito.map((producto) => {
          return <ItemCheckout key={producto.item.id} producto={producto} />;
        })}
        </div>
        {
          cantidadTotal > 0 &&
          <div className="buy-detail">
          <div className="span-box">
            <p className="title">Resumen de tu compra</p>
          </div>
        <hr />
          <p>Cantidad de productos: <strong>{cantidadTotal}</strong></p>
          <h3 className="total-pay">
            Total a pagar: <strong>$ {total}</strong>
          </h3>
        </div>
        }
        
      </div>
      <form onSubmit={handleForm} className="form">
        <hr />

        <div className="form-group">
          <label htmlFor="nombre"> Nombre </label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor=""> Apellido </label>
          <input
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor=""> Telefono </label>
          <input
            type="text"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor=""> Email </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor=""> Email Confirmación </label>
          <input
            type="email"
            value={emailConfirmacion}
            onChange={(e) => setEmailConfirmacion(e.target.value)}
          />
        </div>

        {error && <p style={{ color: "red" }}> {error} </p>}

        <button type="submit"> Finalizar Compra </button>
      </form>
      {orderId && (
        <div className="order-detail">
          <p>¡Gracias por tu compra!</p>
          <h4>{nombre} {apellido} </h4> 
          <h2>Tu número de orden es {orderId}{" "}</h2>
        </div>
      )}
    </CheckoutStyled>
  );
};

export default Checkout;
