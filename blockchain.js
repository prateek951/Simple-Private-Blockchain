const SHA256 = require("crypto-js/sha256");

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
/**
 * ================== Blockchain class ======================
 * Class with a constructor for the new blockchain
 * ==========================================================
 */
class Blockchain {
  constructor() {
    this.chain = [];
    this.addABlock(new Block("First Block in the chain"));
  }
  /**
   * ==========================================================
   * Method to add a new block to the blockchain
   * ==========================================================
   */
  addABlock(newBlock) {
    newBlock.height = this.chain.length;
    newBlock.time = new Date()
      .getTime()
      .toString()
      .slice(0, -3);
    if (this.chain.length > 0) {
      newBlock.previousBlockHash = this.chain[this.chain.length - 1].hash;
    }
    newBlock.hash = SHA256(JSON.stringify(newBlock)).toString();
    this.chain.push(newBlock);
  }
}
