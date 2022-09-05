import CryptoJS from "react-native-crypto-js";
import { STRINGS } from "../constants/enum/GeneralEnum";

export function encrypt(msg: string){
  return CryptoJS.AES.encrypt(msg, STRINGS.ENCRYPTION_KEY).toString()
}

export function decrypt(encryptedMsg: string){
  return CryptoJS.AES.decrypt(encryptedMsg, STRINGS.ENCRYPTION_KEY).toString(CryptoJS.enc.Utf8)
}