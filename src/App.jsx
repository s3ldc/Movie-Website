import "./App.css";

function App() {
  return (
    <>
      <Text display="Hello World"/>
      <Text display="Demo text"/>
    </>
  );
}

function Text({display}) {
  return (
    <div>
      <p>{display}</p>
    </div>
  );
}

export default App;
