//
//  NativeAppModule.swift
//  TestProject4
//
//  Created by Kartik Mittal on 08/08/22.
//

import Foundation
import CryptoSwift

@objc(NativeAppModule)
class NativeAppModule : NSObject {
  
  let key = "ab821eb4b7d352cd"
  
  @objc func encrypt(_ inputString: String, resolver resolve: RCTPromiseResolveBlock, rejecter reject: RCTPromiseRejectBlock) {
    do {
      let iv = generateRandomBytes()
      let data = inputString.data(using: .utf8)!
      
      let enc = try AES(key: Array(key.utf8), blockMode: CBC(iv: Array(iv)), padding: .pkcs5).encrypt([UInt8](data))
      let encryptedData = Data(enc)
    
      let messageData = NSMutableData()
      messageData.append(iv)
      messageData.append(encryptedData)
      
      let result = messageData.base64EncodedString();
      
      resolve(result)
    } catch {
      reject("errorCode", error.localizedDescription, error);
    }
  }

  @objc func decrypt(_ cipherText: String, resolver resolve: RCTPromiseResolveBlock, rejecter reject: RCTPromiseRejectBlock) {
    do{
      let data = Data(base64Encoded: cipherText)
      
      var iv = [UInt8](repeating:0, count:16)
      data!.copyBytes(to: &iv, from: Range(NSRange(location: 0, length: 16))!)
      
      var cipher = [UInt8](repeating:0, count:data!.count - 16)
      data!.copyBytes(to: &cipher, from: Range(NSRange(location: 16, length: data!.count - 16))!)
      
      let dec = try AES(key: Array(key.utf8), blockMode: CBC(iv: Array(iv)), padding: .pkcs5).decrypt(cipher)
      let decryptedData = Data(dec)
      
      resolve(String(bytes: decryptedData.bytes, encoding: .utf8))
    }catch{
      reject("errorCode", error.localizedDescription, error);
    }
  }
  
  func generateRandomBytes() -> Data {
      var keyData = Data(count: 16)
      let result = keyData.withUnsafeMutableBytes {
          SecRandomCopyBytes(kSecRandomDefault, 16, $0.baseAddress!)
      }
      if result == errSecSuccess {
          return keyData
      } else {
          return keyData
      }
  }
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}

