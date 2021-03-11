const Mustache = require("mustache");
const fs = require("fs");

const DIR = "./main.mustache";

const DATA = {
  age: (() => {
    const birthday = new Date(1997, 7, 22).getTime();
    return new Date(Date.now() - birthday).getUTCFullYear() - 1970;
  })(),
};

function generateReadMe() {
  const data = fs.readFileSync(DIR);
  const output = Mustache.render(data.toString(), DATA);
  fs.writeFileSync("README.md", output);
}

generateReadMe();
