import React, { useState } from "react";
import "./styles.css";

const List = ({ data, children }) => {
  return (
    <ul>
      {Object.entries(data).map(([key, description]) => (
        <li key={key}>{children({ key, description })}</li>
      ))}
    </ul>
  );
};

export default function App() {
  const [definitions] = useState({
    name: "Tomy",
    lastName: "Testón"
  });

  return (
    <div className="App">
      <h1>Example render props</h1>
      <List data={definitions}>
        {({ key, description }) => (
          <>
            {key}: <strong>{description}</strong>
          </>
        )}
      </List>
    </div>
  );
}
