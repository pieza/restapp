
var CryptoJS = require("crypto-js")

let util = {}

/**
 * Encrypta texto, numeros y objetos y devuelve el hash.
 * 
 * @param {*} text texto a encryptar.
 */
util.encrypt = (text) => {
    return CryptoJS.AES.encrypt(JSON.stringify(text), process.env.CRYPTO_SECRET).toString()
}

/**
 * Desencripta texto, numeros y objetos encriptado previamente.
 * 
 * @param {*} hash texto encryptado.
 */
util.decrypt = (hash) => {
    const bytes = CryptoJS.AES.decrypt(hash, process.env.CRYPTO_SECRET)
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
}

module.exports = util