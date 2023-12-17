const data = require("./fake-server/db.json");
const fs = require("fs");

data.searchInTitle;

let newSearchInTitle = {};

for (let index = 0; index < data.searchInTitle.length; index++) {
  const element = data.searchInTitle[index];
  const encodedTitle = encodeURIComponent(element.title);

  newSearchInTitle[encodedTitle] = {
    status: "success",
    totalResults: 1,
    results: [element.results[0]],
  };
}
fs.writeFileSync("todo.json", JSON.stringify(newSearchInTitle, null, 2));
