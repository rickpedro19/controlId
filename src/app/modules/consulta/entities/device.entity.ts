import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Device {
  @Field()
  id!: number;

  @Field()
  name!: string;
  // host                      String?              @db.VarChar(50)
  // port                      Int
  // ssl                       Boolean              @db.Bit(1)
  // user                      String?              @db.VarChar(50)
  // password                  String?              @db.VarChar(50)
  // model                     Int
  // beep                      Boolean              @db.Bit(1)
  // leds                      String?              @db.VarChar(50)
  // gatewayMode               Int
  // operationMode             Int
  // antiPassback              Boolean              @db.Bit(1)
  // dailyReset                Boolean              @db.Bit(1)
  // vehicleControl            Boolean              @db.Bit(1)
  // bellRelay                 Int
  // urn                       Boolean              @db.Bit(1)
  // serial                    String?              @db.VarChar(20)
  // versao                    String?              @db.VarChar(10)
  // camera                    String?              @db.VarChar(50)
  // impressora                String?              @db.VarChar(50)
  // lastDate                  DateTime?            @db.DateTime(0)
  // status                    String?              @db.VarChar(100)
  // panicCard                 Boolean              @db.Bit(1)
  // dateLastLog               DateTime?            @db.DateTime(0)
  // dateLastOnline            DateTime?            @db.DateTime(0)
  // isCurrentlyOnline         Boolean              @db.Bit(1)
  // disableAntiPassback       Boolean              @db.Bit(1)
  // disableUsb                Boolean              @db.Bit(1)
  // keepUserImages            Boolean              @db.Bit(1)
  // ResetCount                Int
  // parentDeviceId            BigInt?
  // entryChildDeviceId        BigInt?
  // maskDetectionEnabled      Int?
  // identificationDistance    BigInt?
  // ledIntensity              BigInt?
  // ledActivationThreshold    Int?
  // sameFaceDetectionInterval BigInt?
  // limitIdentificationArea   Boolean?             @db.Bit(1)
  // strictLiveness            Boolean?             @db.Bit(1)
  // vehicleDetection          Boolean?             @db.Bit(1)
  // rtspPort                  Int?
  // rtspUsername              String?              @db.VarChar(50)
  // rtspPassword              String?              @db.VarChar(50)
  // rtspCamera                Int?
  // onvifPort                 Int?
  // rtspVideoWidth            Int?
  // rtspVideoHeight           Int?
  // rtspCodec                 String?              @db.VarChar(50)
  // inputMode                 Int
  // idLastLogContingency      BigInt
  // language                  String?              @db.VarChar(20)
  // lastNsr                   Int?
  // operationModeVisitor      Int
  // idIdentificationMode      BigInt?
  // coluna1                   Int?
  // deviceaccessrules         deviceaccessrules[]
  // devicerelays              devicerelays[]
  // integrationdevices        integrationdevices[]
}
