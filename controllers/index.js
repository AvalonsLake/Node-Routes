const awesomeFunction = (Req, res) => {
  res.send("Hello World!");
};

const tooeleTech = (Req, res) => {
  res.send("Tooele Tech is Awesome!");
};

const personalFunction = (Req, res) => {
  res.send("This is  a personal message! Feel free to make your own!");
};

module.exports = { awesomeFunction, tooeleTech, personalFunction };
