import {Club, Manager, Winers} from "../generated/schema"
import {NewClub} from "../generated/Factory/Factory"
import {RewardUpdate as RewardNFT, LimitAndDepoUpdate, Winer as WinerNFT} from "../generated/templates/ClubNFT/ClubNFT"
import {RewardUpdate as RewardToken, Winer as WinerToken} from "../generated/templates/ClubToken/ClubToken";
import {ClubNFT, ClubToken} from "../generated/templates"

export function handleNewClub(event: NewClub):void {
    let managerId = event.params.manager.toHexString();

    let manager = Manager.load(managerId);
    if(manager === null) {
        manager = new Manager(managerId);
        manager.blockNumber = event.block.number;
        manager.timestamp = event.block.timestamp;
        manager.club = [];
    }
    let clubList = manager.club;
    let club = new Club(event.params.club.toHexString());
    club.name = event.params.name;
    club.reward = event.params.reward;
    club.deposit = event.params.deposit;
    club.membersLimit = event.params.membersLimit;
    club.rewardAddress = event.params.rewardAddress;
    club.manager = managerId;

    if(event.params.typeHash.toHexString() == "0x96706879d29c248edfb2a2563a8a9d571c49634c0f82013e6f5a7cde739d35d4") {
        club.type = "TOKEN";
        ClubToken.create(event.params.club);
    }else {
        club.type = "NFT";
        ClubNFT.create(event.params.club);
    }
    club.createdAtTimestamp = event.block.timestamp;
    club.createdAtBlockNumber = event.block.number;
    club.save();
    clubList.push(club.id);
    manager.club = clubList;
    manager.save();
}

export function handleWinerToken(event: WinerToken):void {
    let winerId = event.transaction.hash.toHexString() + "-" + event.logIndex.toString();
    let winer = new Winers(winerId);
    winer.address = event.params.winer_;
    winer.timestamp = event.block.timestamp;
    winer.blockNumber = event.block.number;

    let club = Club.load(event.params.club.toHexString());
    winer.club = club!.id;
    winer.save();
}

export function handleWinerNFT(event: WinerNFT):void {
    let winerId = event.transaction.hash.toHexString() + "-" + event.logIndex.toString();
    let winer = new Winers(winerId);
    winer.address = event.params.winer_;
    winer.timestamp = event.block.timestamp;
    winer.blockNumber = event.block.number;

    let club = Club.load(event.params.club_.toHexString());
    winer.club = club!.id;
    winer.save();
}

export function handleRewardUpdateToken(event: RewardToken):void {
    let club = Club.load(event.params.club.toHexString());
    club!.reward = event.params.reward_;
    club!.deposit = event.params.deposit_;
    club!.membersLimit = event.params.membersLimit_;
    club!.save();
}

export function handleNFTReward(event: RewardNFT):void {
    let club = Club.load(event.params.club_.toHexString());
    club!.reward = event.params.reward_;
    club!.rewardAddress = event.params.rewardAddress_;
    club!.save();
}

export function handleLimitDepoNFTUpdate(event: LimitAndDepoUpdate):void {
    let club = Club.load(event.params.club_.toHexString());
    if(event.params.name_ == "membersLimit") {
        club!.membersLimit = event.params.update_;
    }else {
        club!.deposit = event.params.update_;
    }
    club!.save();
}