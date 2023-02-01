// import logo from './logo.svg';
import './App.css';
import NavHeader from './layout/NavHeader'

function App() {

  // App requirements
  // At minimum, your UI should display each Bnb's:
  // Title
  // Image
  // Location
  // Payment information

  // Your UI code should:
  // Utilize at least one component to render each Bnb. An example name for this component could be VacationRental.
  // Use the appropriate loops/conditionals to map and display components.
  // Use propTypes to define props for each component, if any.
  
  // Offers a "Shopping Cart" functionality where you can add a vacation rental to a shopping cart. This shopping cart should...
  // Be displayed next to the vacation rentals
  // Allow the user to remove a vacation rental from the cart if they change their mind
  // Display the total payment due based on the vacation rentals in the cart
  // In order to facilitate the "Shopping Cart" functionality, each vacation rental should have a button that allows the user to add a vacation rental to the shopping cart.

  return (
    <div className="App">
      <NavHeader />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
