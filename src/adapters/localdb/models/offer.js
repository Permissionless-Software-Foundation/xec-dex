const mongoose = require('mongoose')

const Offer = new mongoose.Schema({
  // SWaP Protocol Properties
  lokadId: { type: String },
  messageType: { type: Number },
  messageClass: { type: Number },
  tokenId: { type: String },
  buyOrSell: { type: String },
  rateInSats: { type: String },
  minSatsToExchange: { type: String },
  signature: { type: String },
  sigMsg: { type: String },
  utxoTxid: { type: String },
  utxoVout: { type: Number },
  numTokens: { type: Number },
  hdIndex: { type: Number }, // HD index address holding the UTXO for this offer.

  //
  offerIpfsId: { type: String },
  offerBchAddr: { type: String },
  offerPubKey: { type: String }
})

module.exports = mongoose.model('offer', Offer)
