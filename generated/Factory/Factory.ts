// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class NewClub extends ethereum.Event {
  get params(): NewClub__Params {
    return new NewClub__Params(this);
  }
}

export class NewClub__Params {
  _event: NewClub;

  constructor(event: NewClub) {
    this._event = event;
  }

  get club(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get name(): string {
    return this._event.parameters[1].value.toString();
  }

  get deposit(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get membersLimit(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get reward(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get rewardAddress(): Address {
    return this._event.parameters[5].value.toAddress();
  }

  get manager(): Address {
    return this._event.parameters[6].value.toAddress();
  }

  get typeHash(): Bytes {
    return this._event.parameters[7].value.toBytes();
  }
}

export class Factory extends ethereum.SmartContract {
  static bind(address: Address): Factory {
    return new Factory("Factory", address);
  }

  NFT_TYPEHASH(): Bytes {
    let result = super.call("NFT_TYPEHASH", "NFT_TYPEHASH():(bytes32)", []);

    return result[0].toBytes();
  }

  try_NFT_TYPEHASH(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("NFT_TYPEHASH", "NFT_TYPEHASH():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  TOKEN_TYPEHASH(): Bytes {
    let result = super.call("TOKEN_TYPEHASH", "TOKEN_TYPEHASH():(bytes32)", []);

    return result[0].toBytes();
  }

  try_TOKEN_TYPEHASH(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "TOKEN_TYPEHASH",
      "TOKEN_TYPEHASH():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }
}

export class ClubNFTCall extends ethereum.Call {
  get inputs(): ClubNFTCall__Inputs {
    return new ClubNFTCall__Inputs(this);
  }

  get outputs(): ClubNFTCall__Outputs {
    return new ClubNFTCall__Outputs(this);
  }
}

export class ClubNFTCall__Inputs {
  _call: ClubNFTCall;

  constructor(call: ClubNFTCall) {
    this._call = call;
  }

  get _name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _deposit(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _membersLimit(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class ClubNFTCall__Outputs {
  _call: ClubNFTCall;

  constructor(call: ClubNFTCall) {
    this._call = call;
  }
}

export class ClubTokenCall extends ethereum.Call {
  get inputs(): ClubTokenCall__Inputs {
    return new ClubTokenCall__Inputs(this);
  }

  get outputs(): ClubTokenCall__Outputs {
    return new ClubTokenCall__Outputs(this);
  }
}

export class ClubTokenCall__Inputs {
  _call: ClubTokenCall;

  constructor(call: ClubTokenCall) {
    this._call = call;
  }

  get name_(): string {
    return this._call.inputValues[0].value.toString();
  }

  get deposit_(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get membersLimit_(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get rewardAddress_(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class ClubTokenCall__Outputs {
  _call: ClubTokenCall;

  constructor(call: ClubTokenCall) {
    this._call = call;
  }
}
