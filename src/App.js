import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api";
import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData().then((data) => setData(data.data));
  }, []);
  return (
    <div className={styles.container}>
      <Cards data={data} />
      <CountryPicker />
      <Chart />
    </div>
  );
};

export default App;
