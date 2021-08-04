const SSTATES = ["UP", "DOWN", "FATAL", "SLEEP"];

const getRandomString = () =>
  Math.random().toString(36).substring(2, 15) +
  Math.random().toString(36).substring(2, 15);

const getRandomRangeNumber = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

const ServerConfig = () => ({
  name: getRandomString(),
  serverState: SSTATES[Math.floor(Math.random() * SSTATES.length)],
  lastUpdate: Date.now(),
  lastUser: {
    name: getRandomString(),
    age: getRandomRangeNumber()
  }
});

export const get_data = (subscriberCb) => {
  const pid = setInterval(() => subscriberCb(ServerConfig()), 5000);
  return pid;
};
