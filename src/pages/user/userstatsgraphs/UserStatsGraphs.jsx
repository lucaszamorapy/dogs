import React, { useState } from "react";
import styles from "./UserStatsGraphs.module.css";

const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = useState([]);
  const [total, setTotal] = useState(0);

  React.useEffect(() => {
    setTotal(
      data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b, 0)
    );
    console.log(data);
  }, [data]);

  return (
    <section className={`${styles.graph}animeLeft`}>
      <div className={styles.graph}>
        <p>Acessos: {total}</p>
      </div>
    </section>
  );
};

export default UserStatsGraphs;
