import createCanisterFromPlug from "./createCanisterFromPlug";
import canisterIds from "../../canister_ids.json"
import { idlFactory } from "../../src/declarations/marketplace/marketplace.did.js"

export default async function getMarketplaceCanister () {
    const marketplaceCanisterId = canisterIds["marketplace"]["ic"];
    return await createCanisterFromPlug(marketplaceCanisterId, idlFactory);
}
