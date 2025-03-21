import { Principal } from '@dfinity/principal';
import React from 'react'
import { AppContext } from "../../App"
import canisterIds from "../../../canister_ids.json"


export default function StakeStep (props) {
    const { initDip721 } = React.useContext(AppContext);
    const status = {
        UNSTAKING: "UNSTAKING",
        STAKING: "STAKING",
        ERROR: "ERROR"
    }

    let [staking, setStaking] = React.useState(status.UNSTAKING);



    async function onSubmit () {
        setStaking(status.STAKING);
        let nftCanister = await initDip721();

        let res = await nftCanister.transfer(Principal.fromText(canisterIds["marketplace"]["ic"]), props.nftData.index)
        console.log("transfer nft result is : " + JSON.stringify(res))
        if (res?.Ok) {
            props.nextStep();
        } else {
            setStaking(status.ERROR);
        }
    }
    return (
        <div className='flex flex-col'>
            <ul className="steps justify-center">
                <li className="step step-primary" >Listing</li>
                <li className="step step-primary">Staking</li>
                <li className="step">Mint</li>
                <li className="step">Finished</li>
            </ul>

            <div className="card bg-base-100 shadow-xl">
                <div className="flex flex-col card-body">
                    <h2 className="card-title">Transfer this NFT to Sharing Marketplace?</h2>
                    <div className="flex flex-col modal-action justify-end">
                        <progress className={"progress w-56 " + status.STAKING == staking ? " visible" : "invisible"}></progress>
                        <div className={"alert alert-error shadow-lg " + status.ERROR == staking ? " visible" : "invisible"}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>Stake NFT failed!</span>
                            </div>
                        </div>
                        <div className='flex flex-row justify-end'>
                            <label htmlFor="listing-step" className="btn mr-4" disabled={staking == status.STAKING ? "disabled" : ""}>Cancel</label>
                            <button className="btn" onClick={async () => { onSubmit() }} disabled={staking == status.STAKING ? "disabled" : ""}>Stake</button>
                        </div>
                        <div />
                    </div>
                </div>
            </div>
        </div >


    )
}
