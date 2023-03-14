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

export class LimitAndDepoUpdate extends ethereum.Event {
  get params(): LimitAndDepoUpdate__Params {
    return new LimitAndDepoUpdate__Params(this);
  }
}

export class LimitAndDepoUpdate__Params {
  _event: LimitAndDepoUpdate;

  constructor(event: LimitAndDepoUpdate) {
    this._event = event;
  }

  get update_(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get name_(): string {
    return this._event.parameters[1].value.toString();
  }

  get club_(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class RewardUpdate extends ethereum.Event {
  get params(): RewardUpdate__Params {
    return new RewardUpdate__Params(this);
  }
}

export class RewardUpdate__Params {
  _event: RewardUpdate;

  constructor(event: RewardUpdate) {
    this._event = event;
  }

  get rewardAddress_(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get reward_(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get club_(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class Winer extends ethereum.Event {
  get params(): Winer__Params {
    return new Winer__Params(this);
  }
}

export class Winer__Params {
  _event: Winer;

  constructor(event: Winer) {
    this._event = event;
  }

  get winer_(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get club_(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class clubNFT extends ethereum.SmartContract {
  static bind(address: Address): clubNFT {
    return new clubNFT("clubNFT", address);
  }

  deposit(): BigInt {
    let result = super.call("deposit", "deposit():(uint256)", []);

    return result[0].toBigInt();
  }

  try_deposit(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("deposit", "deposit():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  factory(): Address {
    let result = super.call("factory", "factory():(address)", []);

    return result[0].toAddress();
  }

  try_factory(): ethereum.CallResult<Address> {
    let result = super.tryCall("factory", "factory():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  lotteryStatus(): boolean {
    let result = super.call("lotteryStatus", "lotteryStatus():(bool)", []);

    return result[0].toBoolean();
  }

  try_lotteryStatus(): ethereum.CallResult<boolean> {
    let result = super.tryCall("lotteryStatus", "lotteryStatus():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  manager(): Address {
    let result = super.call("manager", "manager():(address)", []);

    return result[0].toAddress();
  }

  try_manager(): ethereum.CallResult<Address> {
    let result = super.tryCall("manager", "manager():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  membersLimit(): BigInt {
    let result = super.call("membersLimit", "membersLimit():(uint256)", []);

    return result[0].toBigInt();
  }

  try_membersLimit(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("membersLimit", "membersLimit():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  reward(): BigInt {
    let result = super.call("reward", "reward():(uint256)", []);

    return result[0].toBigInt();
  }

  try_reward(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("reward", "reward():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  rewardAddress(): Address {
    let result = super.call("rewardAddress", "rewardAddress():(address)", []);

    return result[0].toAddress();
  }

  try_rewardAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "rewardAddress",
      "rewardAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  winer(): Address {
    let result = super.call("winer", "winer():(address)", []);

    return result[0].toAddress();
  }

  try_winer(): ethereum.CallResult<Address> {
    let result = super.tryCall("winer", "winer():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ClaimFeeCall extends ethereum.Call {
  get inputs(): ClaimFeeCall__Inputs {
    return new ClaimFeeCall__Inputs(this);
  }

  get outputs(): ClaimFeeCall__Outputs {
    return new ClaimFeeCall__Outputs(this);
  }
}

export class ClaimFeeCall__Inputs {
  _call: ClaimFeeCall;

  constructor(call: ClaimFeeCall) {
    this._call = call;
  }
}

export class ClaimFeeCall__Outputs {
  _call: ClaimFeeCall;

  constructor(call: ClaimFeeCall) {
    this._call = call;
  }
}

export class DrawCall extends ethereum.Call {
  get inputs(): DrawCall__Inputs {
    return new DrawCall__Inputs(this);
  }

  get outputs(): DrawCall__Outputs {
    return new DrawCall__Outputs(this);
  }
}

export class DrawCall__Inputs {
  _call: DrawCall;

  constructor(call: DrawCall) {
    this._call = call;
  }
}

export class DrawCall__Outputs {
  _call: DrawCall;

  constructor(call: DrawCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
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

  get _manager(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class RegisterCall extends ethereum.Call {
  get inputs(): RegisterCall__Inputs {
    return new RegisterCall__Inputs(this);
  }

  get outputs(): RegisterCall__Outputs {
    return new RegisterCall__Outputs(this);
  }
}

export class RegisterCall__Inputs {
  _call: RegisterCall;

  constructor(call: RegisterCall) {
    this._call = call;
  }
}

export class RegisterCall__Outputs {
  _call: RegisterCall;

  constructor(call: RegisterCall) {
    this._call = call;
  }
}

export class SetDepositCall extends ethereum.Call {
  get inputs(): SetDepositCall__Inputs {
    return new SetDepositCall__Inputs(this);
  }

  get outputs(): SetDepositCall__Outputs {
    return new SetDepositCall__Outputs(this);
  }
}

export class SetDepositCall__Inputs {
  _call: SetDepositCall;

  constructor(call: SetDepositCall) {
    this._call = call;
  }

  get _deposit(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetDepositCall__Outputs {
  _call: SetDepositCall;

  constructor(call: SetDepositCall) {
    this._call = call;
  }
}

export class SetMembersLimitCall extends ethereum.Call {
  get inputs(): SetMembersLimitCall__Inputs {
    return new SetMembersLimitCall__Inputs(this);
  }

  get outputs(): SetMembersLimitCall__Outputs {
    return new SetMembersLimitCall__Outputs(this);
  }
}

export class SetMembersLimitCall__Inputs {
  _call: SetMembersLimitCall;

  constructor(call: SetMembersLimitCall) {
    this._call = call;
  }

  get _membersLimit(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetMembersLimitCall__Outputs {
  _call: SetMembersLimitCall;

  constructor(call: SetMembersLimitCall) {
    this._call = call;
  }
}

export class StartCall extends ethereum.Call {
  get inputs(): StartCall__Inputs {
    return new StartCall__Inputs(this);
  }

  get outputs(): StartCall__Outputs {
    return new StartCall__Outputs(this);
  }
}

export class StartCall__Inputs {
  _call: StartCall;

  constructor(call: StartCall) {
    this._call = call;
  }

  get _rewardAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class StartCall__Outputs {
  _call: StartCall;

  constructor(call: StartCall) {
    this._call = call;
  }
}
