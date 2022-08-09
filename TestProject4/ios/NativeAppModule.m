//
//  NativeAppModule.m
//  TestProject4
//
//  Created by Kartik Mittal on 08/08/22.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(NativeAppModule, NSObject)

RCT_EXTERN_METHOD(encrypt: (NSString)inputString resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(decrypt: (NSString)cipherText resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

@end
