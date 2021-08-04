import { useState, useEffect } from "react";
import { get_data } from "./ServerConfiguration";

const ServerComponent = () => {
  const [serverConf, setServerConf] = useState({});

  useEffect(() => {
    const pid = get_data(setServerConf);
    return () => {
      clearInterval(pid);
    };
  });

  return serverConf.name ? <p>{serverConf.name}</p> : <p>No State</p>;
};

export default ServerComponent;
