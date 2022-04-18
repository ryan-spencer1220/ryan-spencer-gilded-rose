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

  it("should decrease the sellIn value by one and increase quality by one", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 10, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Aged Brie");
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(11);
  });

  it("should decrease the sellIn value by one and increase quality by one", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 2, 25)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Aged Brie");
    expect(items[0].sellIn).toBe(1);
    expect(items[0].quality).toBe(26);
  });

  it("should decrease the sellIn value by one and increase quality by one", () => {
    const gildedRose = new Shop([new Item("Aged Brie", -1, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Aged Brie");
    expect(items[0].sellIn).toBe(-2);
    expect(items[0].quality).toBe(50);
  });

  it("should decrease the sellIn value by one", () => {
    const gildedRose = new Shop([new Item("Aged Brie", -1, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Aged Brie");
    expect(items[0].sellIn).toBe(-2);
    expect(items[0].quality).toBe(50);
  });

  it("should decrease the sellIn value by one and increase quality by one", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 8, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Aged Brie");
    expect(items[0].sellIn).toBe(7);
    expect(items[0].quality).toBe(50);
  });

  it("should decrease the sellIn value by one and increase quality by one", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 4, 48)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Aged Brie");
    expect(items[0].sellIn).toBe(3);
    expect(items[0].quality).toBe(49);
  });

  it("should decrease the sellIn value by one and increase quality by one", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Aged Brie");
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(50);
  });

  it("should decrease the sellIn value by one", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Aged Brie");
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(50);
  });

  it("should decrease the sellIn value by one and increase quality by one", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 11, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Aged Brie");
    expect(items[0].sellIn).toBe(10);
    expect(items[0].quality).toBe(1);
  });

  it("should decrease the sellIn value by one and increase quality by one", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 11, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Aged Brie");
    expect(items[0].sellIn).toBe(10);
    expect(items[0].quality).toBe(2);
  });

  it("should decrease the sellIn value by one and increase quality by one", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 11, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Aged Brie");
    expect(items[0].sellIn).toBe(10);
    expect(items[0].quality).toBe(50);
  });

  it("should decrease the sellIn value by one", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 11, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Aged Brie");
    expect(items[0].sellIn).toBe(10);
    expect(items[0].quality).toBe(50);
  });

  it("should decrease the sellIn value by one", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 4, 50),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toBe(3);
    expect(items[0].quality).toBe(50);
  });

  it("should decrease the sellIn value by one and increase the quality value by one", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 4, 49),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toBe(3);
    expect(items[0].quality).toBe(50);
  });

  it("should decrease the sellIn value by one and increase the quality value by two", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 4, 48),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toBe(3);
    expect(items[0].quality).toBe(50);
  });

  it("should decrease the sellIn value by one increase the quality value by three", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 4, 47),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toBe(3);
    expect(items[0].quality).toBe(50);
  });

  it("should maintain the same quality value and sellIn value", () => {
    const gildedRose = new Shop([
      new Item("Sulfuras, Hand of Ragnaros", 11, 80),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Sulfuras, Hand of Ragnaros");
    expect(items[0].sellIn).toBe(11);
    expect(items[0].quality).toBe(80);
  });

  it("should maintain the same quality value and sellIn value", () => {
    const gildedRose = new Shop([
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Sulfuras, Hand of Ragnaros");
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(80);
  });

  it("should maintain the same quality value and sellIn value", () => {
    const gildedRose = new Shop([
      new Item("Sulfuras, Hand of Ragnaros", -3, 80),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Sulfuras, Hand of Ragnaros");
    expect(items[0].sellIn).toBe(-3);
    expect(items[0].quality).toBe(80);
  });
});
