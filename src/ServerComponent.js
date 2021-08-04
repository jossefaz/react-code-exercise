import { useState, useEffect } from "react";
import { get_data } from "./ServerConfiguration";

const ServerComponent = () => {
  const [serverConf, setServerConf] = useState({});

  useEffect(() => {
    const gameStartInternal = get_data(setServerConf);

    return () => {
      clearInterval(gameStartInternal);
    };
  });

  return serverConf.name ? <p>{serverConf.name}</p> : <p>No State</p>;
};

export default ServerComponent;
