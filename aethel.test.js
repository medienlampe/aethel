const fs = require("fs");

test("Checks if spirits.json exists", () => {
  expect(fs.existsSync("_data/spirits.json")).toBe(true);
});

test("Checks if spirits.json is well-formed.", () => {
  const compileSpirits = () => {
    let result = false;
    let data = fs.readFileSync("_data/spirits.json", "utf8");
    let content = JSON.parse(data);

    if (Object.keys(content).length) {
      result = true;
    }

    return result;
  };

  expect(compileSpirits()).toBe(true);
});
