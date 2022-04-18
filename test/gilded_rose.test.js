const { Shop, Item } = require("../src/gilded_rose");

describe("Gilded Rose", function () {
  it("should decrease sellIn by one", function () {
    const gildedRose = new Shop([new Item("foo", -1, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(-2);
    expect(items[0].quality).toBe(0);
  });

  it("should decrease sellIn by one and quality by one", function () {
    const gildedRose = new Shop([new Item("foo", -1, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(-2);
    expect(items[0].quality).toBe(0);
  });

  it("should decrease sellIn by one and decrease quality by two", function () {
    const gildedRose = new Shop([new Item("foo", -1, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(-2);
    expect(items[0].quality).toBe(47);
  });

  it("should decrease sellIn by one and quality by two", function () {
    const gildedRose = new Shop([new Item("foo", -1, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(-2);
    expect(items[0].quality).toBe(48);
  });

  it("should decrease sellIn by one", function () {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(0);
  });

  it("should decrease sellIn by one and quality by one", function () {
    const gildedRose = new Shop([new Item("foo", 0, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(0);
  });

  it("should decrease sellIn by one and quality by two", function () {
    const gildedRose = new Shop([new Item("foo", 0, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(47);
  });

  it("should decrease sellIn by one and quality by two", function () {
    const gildedRose = new Shop([new Item("foo", 0, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(48);
  });

  it("should should decrease sellIn by one", function () {
    const gildedRose = new Shop([new Item("foo", 11, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(10);
    expect(items[0].quality).toBe(0);
  });

  it("should decrease sellIn by one and quality by one", function () {
    const gildedRose = new Shop([new Item("foo", 11, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(10);
    expect(items[0].quality).toBe(0);
  });

  it("should should decrease sellIn by one and quality by one", function () {
    const gildedRose = new Shop([new Item("foo", 11, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(10);
    expect(items[0].quality).toBe(48);
  });

  it("should decrease sellIn by one and quality by one", function () {
    const gildedRose = new Shop([new Item("foo", 11, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(10);
    expect(items[0].quality).toBe(49);
  });
});
