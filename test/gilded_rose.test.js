const { Shop, Item } = require("../src/gilded_rose");

describe("Gilded Rose", function () {
  it("should decrease sellIn by one", function () {
    const gildedRose = new Shop([new Item("foo", -1, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(-2);
    expect(items[0].quality).toBe(0);
  });
});
