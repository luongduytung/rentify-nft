export const idlFactory = ({ IDL }) => {
  const ListingId = IDL.Nat64;
  const ListingStatus = IDL.Variant({
    'Redeemed' : IDL.Null,
    'Enable' : IDL.Null,
    'Disable' : IDL.Null,
    'Pending' : IDL.Null,
  });
  const Timestamp = IDL.Int;
  const PriceUnit = IDL.Record({ 'decimals' : IDL.Nat, 'symbol' : IDL.Text });
  const ListingProfile__1 = IDL.Record({
    'id' : ListingId,
    'web' : IDL.Text,
    'status' : ListingStatus,
    'owner' : IDL.Principal,
    'desc' : IDL.Text,
    'name' : IDL.Text,
    'createdAt' : Timestamp,
    'redeemNftId' : IDL.Opt(IDL.Nat),
    'updatedAt' : Timestamp,
    'availableUtil' : Timestamp,
    'nftId' : IDL.Nat,
    'price' : PriceUnit,
    'canisterId' : IDL.Text,
  });
  const Tokens = IDL.Record({ 'e8s' : IDL.Nat64 });
  const LendId = IDL.Nat64;
  const LendIdCommand = IDL.Record({ 'id' : LendId });
  const LendStatus = IDL.Variant({
    'Enable' : IDL.Null,
    'Disable' : IDL.Null,
    'Pending' : IDL.Null,
  });
  const Timestamp__1 = IDL.Int;
  const LendProfile = IDL.Record({
    'id' : LendId,
    'end' : IDL.Nat,
    'web' : IDL.Text,
    'status' : LendStatus,
    'owner' : IDL.Principal,
    'listingId' : IDL.Nat64,
    'createdAt' : Timestamp__1,
    'nftOwner' : IDL.Principal,
    'updatedAt' : Timestamp__1,
    'start' : IDL.Nat,
    'amount' : IDL.Nat64,
    'uNFTId' : IDL.Opt(IDL.Nat),
    'accountIdentifier' : IDL.Vec(IDL.Nat8),
  });
  const Error = IDL.Variant({
    'transferFailed' : IDL.Text,
    'understock' : IDL.Null,
    'burnFailed' : IDL.Text,
    'renting' : IDL.Null,
    'alreadyExisted' : IDL.Null,
    'unknownError' : IDL.Null,
    'notFound' : IDL.Null,
    'idDuplicated' : IDL.Null,
    'listingNotFound' : IDL.Null,
    'parameterErr' : IDL.Text,
    'unauthorized' : IDL.Null,
    'listingLocked' : IDL.Null,
    'mintFailed' : IDL.Null,
    'listingNotEnable' : IDL.Null,
  });
  const Result_2 = IDL.Variant({ 'Ok' : LendProfile, 'Err' : Error });
  const UserId = IDL.Nat64;
  const UserStatus = IDL.Variant({
    'Enable' : IDL.Null,
    'Disable' : IDL.Null,
    'Pending' : IDL.Null,
  });
  const UserPrincipal = IDL.Principal;
  const Timestamp__2 = IDL.Int;
  const UserProfile = IDL.Record({
    'id' : UserId,
    'status' : UserStatus,
    'contactInfo' : IDL.Text,
    'username' : IDL.Text,
    'owner' : UserPrincipal,
    'createdAt' : Timestamp__2,
    'introduction' : IDL.Text,
    'avatarUri' : IDL.Text,
  });
  const ListingIdCommand = IDL.Record({ 'id' : ListingId });
  const Result_3 = IDL.Variant({ 'Ok' : IDL.Nat, 'Err' : Error });
  const Result_1 = IDL.Variant({ 'Ok' : IDL.Nat64, 'Err' : Error });
  const LendProfile__1 = IDL.Record({
    'id' : LendId,
    'end' : IDL.Nat,
    'web' : IDL.Text,
    'status' : LendStatus,
    'owner' : IDL.Principal,
    'listingId' : IDL.Nat64,
    'createdAt' : Timestamp__1,
    'nftOwner' : IDL.Principal,
    'updatedAt' : Timestamp__1,
    'start' : IDL.Nat,
    'amount' : IDL.Nat64,
    'uNFTId' : IDL.Opt(IDL.Nat),
    'accountIdentifier' : IDL.Vec(IDL.Nat8),
  });
  const LendPage = IDL.Record({
    'data' : IDL.Vec(LendProfile__1),
    'totalCount' : IDL.Nat,
    'pageSize' : IDL.Nat,
    'pageNum' : IDL.Nat,
  });
  const ListingPageQuery = IDL.Record({
    'status' : ListingStatus,
    'user' : IDL.Opt(IDL.Principal),
    'pageSize' : IDL.Nat,
    'pageNum' : IDL.Nat,
  });
  const ListingProfile = IDL.Record({
    'id' : ListingId,
    'web' : IDL.Text,
    'status' : ListingStatus,
    'owner' : IDL.Principal,
    'desc' : IDL.Text,
    'name' : IDL.Text,
    'createdAt' : Timestamp,
    'redeemNftId' : IDL.Opt(IDL.Nat),
    'updatedAt' : Timestamp,
    'availableUtil' : Timestamp,
    'nftId' : IDL.Nat,
    'price' : PriceUnit,
    'canisterId' : IDL.Text,
  });
  const ListingPage = IDL.Record({
    'data' : IDL.Vec(ListingProfile),
    'totalCount' : IDL.Nat,
    'pageSize' : IDL.Nat,
    'pageNum' : IDL.Nat,
  });
  const LendCreateCommand = IDL.Record({
    'end' : IDL.Nat,
    'listingId' : IDL.Nat64,
    'start' : IDL.Nat,
  });
  const ListingCreateCommand = IDL.Record({
    'web' : IDL.Text,
    'desc' : IDL.Text,
    'name' : IDL.Text,
    'availableUtil' : Timestamp,
    'nftId' : IDL.Nat,
    'price' : PriceUnit,
    'canisterId' : IDL.Text,
  });
  const Result = IDL.Variant({ 'Ok' : IDL.Bool, 'Err' : Error });
  const Marketplace = IDL.Service({
    'accountId' : IDL.Func([], [IDL.Vec(IDL.Nat8)], ['query']),
    'addNFTCansiter' : IDL.Func([IDL.Principal], [IDL.Bool], []),
    'allListing' : IDL.Func([], [IDL.Vec(ListingProfile__1)], ['query']),
    'canisterBalance' : IDL.Func([], [Tokens], []),
    'getCanisterPrincipal' : IDL.Func([], [IDL.Text], ['query']),
    'getLend' : IDL.Func([LendIdCommand], [Result_2], ['query']),
    'getNFTCansiters' : IDL.Func([], [IDL.Vec(IDL.Principal)], ['query']),
    'getNftCansterId' : IDL.Func([], [IDL.Text], ['query']),
    'getSelf' : IDL.Func([], [IDL.Opt(UserProfile)], ['query']),
    'getSharingNftCansterId' : IDL.Func([], [IDL.Text], ['query']),
    'getUser' : IDL.Func([IDL.Principal], [IDL.Opt(UserProfile)], ['query']),
    'healthcheck' : IDL.Func([], [IDL.Bool], ['query']),
    'listingNFT' : IDL.Func([ListingIdCommand], [Result_3], []),
    'notify' : IDL.Func([LendIdCommand, IDL.Nat64], [Result_1], []),
    'pageEnableLend' : IDL.Func([IDL.Nat, IDL.Nat], [LendPage], ['query']),
    'pageListings' : IDL.Func([ListingPageQuery], [ListingPage], ['query']),
    'pageUserLend' : IDL.Func(
        [IDL.Principal, IDL.Nat, IDL.Nat],
        [LendPage],
        ['query'],
      ),
    'preLendNFT' : IDL.Func([LendCreateCommand], [Result_2], []),
    'preListingNFT' : IDL.Func([ListingCreateCommand], [Result_1], []),
    'redeem' : IDL.Func([ListingIdCommand], [Result_1], []),
    'registerUser' : IDL.Func([], [IDL.Bool], []),
    'setNftCansterId' : IDL.Func([IDL.Text], [Result], []),
    'setShareNftCansterId' : IDL.Func([IDL.Text], [Result], []),
  });
  return Marketplace;
};
export const init = ({ IDL }) => { return []; };
