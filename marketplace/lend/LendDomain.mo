
import Int "mo:base/Int";
import Order "mo:base/Order";

import Sharing "../nft/Sharing.did";
import TokenDomain "../nft/TokenDomain";
import Types "../base/Types";
import Utils "../base/Utils";

module {
    
    public type LendId = Types.Id;
    public type Timestamp = Types.Timestamp;

    public type TokenInfoExt = Sharing.TokenInfoExt;

    public type LendProfile = {
        id: LendId;
        listingId: Nat64;
        owner: Principal;
        nftOwner: Principal;
        status: LendStatus;
        createdAt: Timestamp;
        updatedAt: Timestamp;
        start: Nat;
        end: Nat;
        accountIdentifier: Blob;
        amount: Nat64;
        uNFTId: ?Nat;
        web: Text;
    };

    public type LendStatus = {
        #Pending;
        #Enable;
        #Disable;
    };
    public type LendCreateCommand = {
        listingId: Nat64;
        start: Nat;
        end: Nat;
    };

    public func createProfile(listId: Nat64, id: LendId, owner: Principal, nftOwner: Principal, now: Timestamp, start: Nat, end: Nat, accountIdentifier: Blob, amount: Nat64, web: Text) : LendProfile {
        return {
            id = id ;
            listingId = listId; 
            owner = owner;
            nftOwner = nftOwner;
            status = #Pending;
            createdAt = now ;
            updatedAt = now ;
            start = start;
            end = end;
            accountIdentifier = accountIdentifier;
            amount = amount;
            uNFTId = null;
            web = web;
        };
    };

    public type LendPageQuery = {
        pageSize: Nat;
        pageNum: Nat;
        status: Text;
    };

    public func lendStatusToText(status: LendStatus) : Text {
        switch (status) {
            case (#Enable) "enable";
            case (#Disable)  "disable";
            case (_)  "pending";
        }
    };

    public func lendStatusMatches(profile: LendProfile, status: Text) : Bool {
        lendStatusToText(profile.status) == Utils.toLowerCase(status)
    };

    
    public func lendOrderUpdateTimeDesc(profile1: LendProfile, profile2: LendProfile) : Order.Order {
        Int.compare(profile2.updatedAt, profile1.updatedAt)
    };

    public type LendIdCommand = {
        id: LendId;
    };

    public let lendEq = Types.idEq;

}
