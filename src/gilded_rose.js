class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      // Sulfuras is the only item with a fixed quallity value& sellIn value
      if (this.items[i].name == "Sulfuras, Hand of Ragnaros") {
        // All other items have a sellIn value that decreases by one
      } else {
        this.items[i].sellIn -= 1;
        // Aged Brie increases in quality value increases by one
        if (this.items[i].name == "Aged Brie") {
          this.items[i].quality += 1;
          // Conjured items decrease in quality value by two
        } else if (this.items[i].name.includes("Conjured")) {
          this.items[i].quality -= 2;
          // Backstage Passes fluctuate in quality value based on sellIn value
        } else if (
          this.items[i].name == "Backstage passes to a TAFKAL80ETC concert"
        ) {
          if (this.items[i].sellIn >= 10) {
            this.items[i].quality += 1;
          } else if (this.items[i].sellIn < 10 && this.items[i].sellIn >= 5) {
            this.items[i].quality += 2;
          } else if (this.items[i].sellIn < 5 && this.items[i].sellIn >= 1) {
            this.items[i].quality += 3;
          } else if (this.items[i].sellIn <= 0) {
            this.items[i].quality = 0;
          }
          // All other items with a sellIn value below zero decrease in quality value by two
        } else if (this.items[i].sellIn < 0) {
          this.items[i].quality -= 2;
          // All other items decrease in quality value by one
        } else {
          this.items[i].quality -= 1;
        }
        // Block of code corrects any quality levels over 50 and under 0
        if (this.items[i].quality > 50) {
          this.items[i].quality = 50;
        } else if (this.items[i].quality < 0) {
          this.items[i].quality = 0;
        }
      }
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop,
};
