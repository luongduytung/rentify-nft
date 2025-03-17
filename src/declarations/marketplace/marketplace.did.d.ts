import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export type Error = { 'transferFailed' : string } |
  { 'understock' : null } |
  { 'burnFailed' : string } |
  { 'renting' : null } |
  { 'alreadyExisted' : null } |
  { 'unknownError' : null } |
  { 'notFound' : null } |
  { 'idDuplicated' : null } |
  { 'listingNotFound' : null } |
  { 'parameterErr' : string } |
  { 'unauthorized' : null } |
  { 'listingLocked' : null } |
  { 'mintFailed' : null } |
  { 'listingNotEnable' : null };
export interface LendCreateCommand {
  'end' : bigint,
  'listingId' : bigint,
  'start' : bigint,
}
export type LendId = bigint;
export interface LendIdCommand { 'id' : LendId }
export interface LendPage {
  'data' : Array<LendProfile__1>,
  'totalCount' : bigint,
  'pageSize' : bigint,
  'pageNum' : bigint,
}
export interface LendProfile {
  'id' : LendId,
  'end' : bigint,
  'web' : string,
  'status' : LendStatus,
  'owner' : Principal,
  'listingId' : bigint,
  'createdAt' : Timestamp__1,
  'nftOwner' : Principal,
  'updatedAt' : Timestamp__1,
  'start' : bigint,
  'amount' : bigint,
  'uNFTId' : [] | [bigint],
  'accountIdentifier' : Uint8Array | number[],
}
export interface LendProfile__1 {
  'id' : LendId,
  'end' : bigint,
  'web' : string,
  'status' : LendStatus,
  'owner' : Principal,
  'listingId' : bigint,
  'createdAt' : Timestamp__1,
  'nftOwner' : Principal,
  'updatedAt' : Timestamp__1,
  'start' : bigint,
  'amount' : bigint,
  'uNFTId' : [] | [bigint],
  'accountIdentifier' : Uint8Array | number[],
}
export type LendStatus = { 'Enable' : null } |
  { 'Disable' : null } |
  { 'Pending' : null };
export interface ListingCreateCommand {
  'web' : string,
  'desc' : string,
  'name' : string,
  'availableUtil' : Timestamp,
  'nftId' : bigint,
  'price' : PriceUnit,
  'canisterId' : string,
}
export type ListingId = bigint;
export interface ListingIdCommand { 'id' : ListingId }
export interface ListingPage {
  'data' : Array<ListingProfile>,
  'totalCount' : bigint,
  'pageSize' : bigint,
  'pageNum' : bigint,
}
export interface ListingPageQuery {
  'status' : ListingStatus,
  'user' : [] | [Principal],
  'pageSize' : bigint,
  'pageNum' : bigint,
}
export interface ListingProfile {
  'id' : ListingId,
  'web' : string,
  'status' : ListingStatus,
  'owner' : Principal,
  'desc' : string,
  'name' : string,
  'createdAt' : Timestamp,
  'redeemNftId' : [] | [bigint],
  'updatedAt' : Timestamp,
  'availableUtil' : Timestamp,
  'nftId' : bigint,
  'price' : PriceUnit,
  'canisterId' : string,
}
export interface ListingProfile__1 {
  'id' : ListingId,
  'web' : string,
  'status' : ListingStatus,
  'owner' : Principal,
  'desc' : string,
  'name' : string,
  'createdAt' : Timestamp,
  'redeemNftId' : [] | [bigint],
  'updatedAt' : Timestamp,
  'availableUtil' : Timestamp,
  'nftId' : bigint,
  'price' : PriceUnit,
  'canisterId' : string,
}
export type ListingStatus = { 'Redeemed' : null } |
  { 'Enable' : null } |
  { 'Disable' : null } |
  { 'Pending' : null };
export interface Marketplace {
  'accountId' : ActorMethod<[], Uint8Array | number[]>,
  'addNFTCansiter' : ActorMethod<[Principal], boolean>,
  'allListing' : ActorMethod<[], Array<ListingProfile__1>>,
  'canisterBalance' : ActorMethod<[], Tokens>,
  'getCanisterPrincipal' : ActorMethod<[], string>,
  'getLend' : ActorMethod<[LendIdCommand], Result_2>,
  'getNFTCansiters' : ActorMethod<[], Array<Principal>>,
  'getNftCansterId' : ActorMethod<[], string>,
  'getSelf' : ActorMethod<[], [] | [UserProfile]>,
  'getSharingNftCansterId' : ActorMethod<[], string>,
  'getUser' : ActorMethod<[Principal], [] | [UserProfile]>,
  'healthcheck' : ActorMethod<[], boolean>,
  'listingNFT' : ActorMethod<[ListingIdCommand], Result_3>,
  'notify' : ActorMethod<[LendIdCommand, bigint], Result_1>,
  'pageEnableLend' : ActorMethod<[bigint, bigint], LendPage>,
  'pageListings' : ActorMethod<[ListingPageQuery], ListingPage>,
  'pageUserLend' : ActorMethod<[Principal, bigint, bigint], LendPage>,
  'preLendNFT' : ActorMethod<[LendCreateCommand], Result_2>,
  'preListingNFT' : ActorMethod<[ListingCreateCommand], Result_1>,
  'redeem' : ActorMethod<[ListingIdCommand], Result_1>,
  'registerUser' : ActorMethod<[], boolean>,
  'setNftCansterId' : ActorMethod<[string], Result>,
  'setShareNftCansterId' : ActorMethod<[string], Result>,
}
export interface PriceUnit { 'decimals' : bigint, 'symbol' : string }
export type Result = { 'Ok' : boolean } |
  { 'Err' : Error };
export type Result_1 = { 'Ok' : bigint } |
  { 'Err' : Error };
export type Result_2 = { 'Ok' : LendProfile } |
  { 'Err' : Error };
export type Result_3 = { 'Ok' : bigint } |
  { 'Err' : Error };
export type Timestamp = bigint;
export type Timestamp__1 = bigint;
export type Timestamp__2 = bigint;
export interface Tokens { 'e8s' : bigint }
export type UserId = bigint;
export type UserPrincipal = Principal;
export interface UserProfile {
  'id' : UserId,
  'status' : UserStatus,
  'contactInfo' : string,
  'username' : string,
  'owner' : UserPrincipal,
  'createdAt' : Timestamp__2,
  'introduction' : string,
  'avatarUri' : string,
}
export type UserStatus = { 'Enable' : null } |
  { 'Disable' : null } |
  { 'Pending' : null };
export interface _SERVICE extends Marketplace {}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
