/* eslint-disable no-console */
// eslint-disable-next-line strict
const path = require('path');
const fs = require('fs/promises');

function getTime() {
  const currentDate = new Date();

  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  return {
    hours,
    minutes,
    seconds,
    timestamp: currentDate.toISOString(),
  };
}

function createLogFile() {
  const { hours, minutes, seconds, timestamp } = getTime();

  const fileName = `app-${hours}_${minutes}_${seconds}.log`;
  const filePath = path.join(__dirname, 'logs', fileName);

  fs.writeFile(filePath, timestamp)
    .then(console.log)
    .catch((error) => {
      console.log(error);
      process.exit(1);
    });
}

setInterval(createLogFile, 1000);
