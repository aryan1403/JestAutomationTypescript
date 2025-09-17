/**
 * @jest-environment jsdom
 */

const { addTextToElement } = require("./domutils");

describe("addTextToElement", () => {
  beforeEach(() => {
    document.body.innerHTML = `<div id="test"></div>`;
  });

  test("add text to the element", () => {
    addTextToElement("test", "Hello world");
    const e = document.getElementById("test");
    expect(e.textContent).toBe("Hello world");
  });
});
