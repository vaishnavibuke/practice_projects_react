import React from "react";
import ReactDom from "react-dom/client";
//using external stylesheet
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      {/* <h1>Hello React</h1> */}

      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // inline css styling way1
  // const style = { color: "red", textTransform: "uppercase" };
  // return <h1 style={style}>Fast React Pizza Co.</h1>;

  // inline css styling way2
  // return <h1 style={{color: "red", textTransform: "uppercase"}}>Fast React Pizza Co.</h1>;

  //using external css
  return (
    <header className="header">
      <h1 className="header">Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {/* conditional rendering using && */}
      {/* {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzaData.map((pizza) => {
            return (
              <Pizza
                pizzaObj={pizza}
                key={pizza.name}
              />
            );
          })}
        </ul>
      )} */}

      {/* ======================================== */}
      {/* conditional rendering using ternary op. */}
      {numPizzas > 0 ? (
        // fragments
        // <React.Fragment key={}></React.Fragment>
        <>
          <p>
            Authentic italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => {
              return (
                <Pizza
                  pizzaObj={pizza}
                  key={pizza.name}
                />
              );
            })}
          </ul>
        </>
      ) : (
        <p>We are working on it.Please come back later.</p>
      )}
      {/* =========================================== */}

      {/* Rendering lists dynamically using map() */}
      {/* way1 */}
      {/* <div>
        {pizzaData.map((pizza) => { return(
          <Pizza name={pizza.name} ingredients={pizza.ingredients} 
          photoName={pizza.photoName}/>);
        })}
      </div> */}

      {/* way2 */}
      {/* <ul className="pizzas">
        {pizzaData.map((pizza) => {
          return (
            <Pizza
              pizzaObj={pizza}
              key={pizza.name}
            />
          );
        })}
      </ul> */}

      {/* ========================================== */}

      {/* Rendering lists manually using props */}
      {/* <Pizza
        name="spinaci pizza"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name=" Pizza Margherita"
        ingredients="Tomato and mozarella"
        photoName="pizzas/funghi.jpg"
        price={100}
      /> */}
    </main>
  );
}

function Pizza(props) {
  console.log(props);

  // conditional rendering using multiple returns
  // if (props.pizzaObj.soldOut) return null;  //this statement doesn't render the out of stock pizza

  return (
    <li className={`pizza ${props.pizzaObj.soldOut ? "sold-out" : ""}`}>
      {/* Way1 */}
      {/* <img
        src={props.photoName}
        alt={props.name}
      />
      <div>
        <h3>{props.name} </h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div> */}

      {/* Way2 */}
      <img
        src={props.pizzaObj.photoName}
        alt={props.pizzaObj.name}
      />
      <div>
        <h3>{props.pizzaObj.name} </h3>
        <p>{props.pizzaObj.ingredients}</p>
        {/* Conditionally setting texts inside elements */}
        <span>{props.pizzaObj.soldOut ? "SOLD OUT": props.pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  //writing js in components
  const hour = new Date().getHours();
  const openHour = 15;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  // console.log(isOpen);
  // console.log(hour);

  return (
    <footer className="footer">
      {/* {new Date().toLocaleTimeString()}. We're currently open */}

      {/* Conditional rendering using && */}
      {/* {isOpen && (
        <div className="order">
          <p>We are open until {closeHour}:00. Visit us or order online</p>
          <button className="btn">Order</button>
        </div>
      )} */}
      {/* ==================================================== */}
      {/* Conditional rendering using ?: (ternary) */}
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We are closed. Visit between {openHour}:00 - {closeHour}:00
        </p>
      )}

      {/* ===================================== */}
    </footer>
  );

  // ==========================

  // without props destructuring

  // function Order(props) {
  //   return (
  //     <div className="order">
  //       <p>We are open until {props.closeHour}:00. Visit us or order online</p>
  //       <button className="btn">Order</button>
  //     </div>
  //   );
  // }
}

// with props destructuring
function Order({ closeHour }) {
  return (
    <div className="order">
      {/* bcz of destructuring, we can directly read the property on props obj without the props. notation as the destructured var is directly available to use */}
      <p>We are open until {closeHour}:00. Visit us or order online</p>
      <button className="btn">Order</button>
    </div>
  );
}

//React 18 version
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);

//Before React 18
// React.render(<App />);
