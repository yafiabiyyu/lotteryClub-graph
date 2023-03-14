import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import { NewClub } from "../generated/Factory/Factory"

export function createNewClubEvent(
  club: Address,
  name: string,
  deposit: BigInt,
  membersLimit: BigInt,
  reward: BigInt,
  rewardAddress: Address,
  manager: Address,
  typeHash: Bytes
): NewClub {
  let newClubEvent = changetype<NewClub>(newMockEvent())

  newClubEvent.parameters = new Array()

  newClubEvent.parameters.push(
    new ethereum.EventParam("club", ethereum.Value.fromAddress(club))
  )
  newClubEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  newClubEvent.parameters.push(
    new ethereum.EventParam(
      "deposit",
      ethereum.Value.fromUnsignedBigInt(deposit)
    )
  )
  newClubEvent.parameters.push(
    new ethereum.EventParam(
      "membersLimit",
      ethereum.Value.fromUnsignedBigInt(membersLimit)
    )
  )
  newClubEvent.parameters.push(
    new ethereum.EventParam("reward", ethereum.Value.fromUnsignedBigInt(reward))
  )
  newClubEvent.parameters.push(
    new ethereum.EventParam(
      "rewardAddress",
      ethereum.Value.fromAddress(rewardAddress)
    )
  )
  newClubEvent.parameters.push(
    new ethereum.EventParam("manager", ethereum.Value.fromAddress(manager))
  )
  newClubEvent.parameters.push(
    new ethereum.EventParam("typeHash", ethereum.Value.fromFixedBytes(typeHash))
  )

  return newClubEvent
}
