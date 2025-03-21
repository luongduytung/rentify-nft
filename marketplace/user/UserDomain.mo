

import Array "mo:base/Array";
import Buffer "mo:base/Buffer";
import Char "mo:base/Char";
import Int "mo:base/Int";
import Iter "mo:base/Iter";
import Option "mo:base/Option";
import Order "mo:base/Order";
import Nat "mo:base/Nat";
import Text "mo:base/Text";

import Types "../base/Types";
import Utils "../base/Utils";

module {

    public type Timestamp = Types.Timestamp;
    public type Error = Types.Error;

    public type UserId = Types.Id;
    public type UserPrincipal = Types.UserPrincipal;

    public type UserProfile = {
        id : UserId;
        owner : UserPrincipal;
        username : Text;
        avatarUri: Text;
        introduction: Text;
        contactInfo: Text;    
        status : UserStatus;
        createdAt : Timestamp;
    };

    public type UserStatus = {
        #Pending;
        #Enable;
        #Disable;
    };

    public let userEq = Types.userEq;
    public let userHash = Types.userHash;

    
    public func newUser(userId: UserId, owner: UserPrincipal, avatarUri: Text, createdAt: Timestamp) : UserProfile {
        {
            id = userId;
            owner = owner;
            username = "";
            avatarUri = avatarUri;
            introduction = "";
            contactInfo = "";
            status = #Enable;
            createdAt = createdAt;
        }
    };

    
    public func editUsername(u: UserProfile, newName: Text) : UserProfile {
        {
            id = u.id;
            owner = u.owner;
            username = newName;
            avatarUri = u.avatarUri;
            introduction = u.introduction;
            contactInfo = u.contactInfo;
            status = u.status;
            createdAt = u.createdAt;
        }
    };


    
    public func editIntroduction(u: UserProfile, intro: Text) : UserProfile {
        {
            id = u.id;
            owner = u.owner;
            username = u.username;
            avatarUri = u.avatarUri;
            introduction = intro;
            contactInfo = u.contactInfo;
            status = u.status;
            createdAt = u.createdAt;
        }
    };

    
    public func editContactInfo(u: UserProfile, contactInfo: Text) : UserProfile {
        {
            id = u.id;
            owner = u.owner;
            username = u.username;
            avatarUri = u.avatarUri;
            introduction = u.introduction;
            contactInfo = contactInfo;
            status = u.status;
            createdAt = u.createdAt;
        }
    };

   
    public func editUserStatus(u: UserProfile, newStatus: UserStatus) : UserProfile {
        {
            id = u.id;
            owner = u.owner;
            username = u.username;
            avatarUri = u.avatarUri;
            introduction = u.introduction;
            contactInfo = u.contactInfo;
            status = newStatus;
            createdAt = u.createdAt;
        }
    };

   
    public func disableUser(u: UserProfile) : UserProfile{
        editUserStatus(u, #Disable)
    };

   
    public func enableUser(u: UserProfile) : UserProfile {
        editUserStatus(u, #Enable)
    };

   
    public func userIsDisabled(u: UserProfile) : Bool {
        u.status == #Disable
    };

}
