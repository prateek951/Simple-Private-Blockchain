/**
 * Based on block data model
 * Each block will have a hash, height, body, time and previousBlockHash
 */

class Block {
  constructor(data) {
    this.hash = "";
    this.height = 0;
    this.body = data;
    this.time = 0;
    this.previousBlockHash = "";
  }
}
