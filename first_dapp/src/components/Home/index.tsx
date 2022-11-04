import React, {useEffect, useState} from 'react';


const Home: React.FC = () => {
    //state variable to store user's public wallet 
    const [currentAccount, setCurrentAccount] = useState<string>("");

    // check wallet connection when the page loads
    const checkIfWalletIsConnected = () => {
        // access to window.ethereum
        const {ethereum} = window;
        //check if user has metamask 
        if (!ethereum) {
            alert("Make sure you have metamask");
            return;
        }
        //get the wallet account
        ethereum.request<string[]>({method: 'eth_accounts'}).then((accounts) => {
            //get the first account
            if (accounts && accounts.length !== 0){
                const account = accounts[0];
                console.log("Found account:", account);
                //set the account as a state 
                account && setCurrentAccount(account);
            } else {
                console.log("No account");
            }
        });
    };

    // connect to wallet 
    const connectWallet = async () => {
        try {
            // get the wallet 
            const {ethereum} = window;
            // there is no wallet extension 
            if (!ethereum) {
                alert("Opps, looks like there is no wallet!");
                return;
            }
            const currentNetwork = ethereum.networkVersion;
            console.log("Current network", currentNetwork);
            // request access to account 
            const accounts = await ethereum.request<string[]>({method: "eth_requestAccounts"});
            //set the account in the state 
            accounts && setCurrentAccount(accounts[0]!); 
        } catch (error){
            console.log(error);
        }
    };

    //run function checkIfWalletIsConnected when the page loads
    useEffect(() => {
        console.log('useEffect');
        // checkIfWalletIsConnected();
    }, []);

    //connect to wallet
    const walletNotConnected = () => (
        <button onClick={connectWallet} className="connect-to-wallet-button">
            Connect to Wallet
        </button>
    );

    //wallet connected
    const walletConnected = () => (
        <div>
            <p>Connected to the wallet</p>
        </div>
    );

    return (
        <div className="App">
            <div style={{display: 'flex', justifyContent: 'center', height: '50px'}}>
                {/* {currentAccount === "" ? walletNotConnected()  : walletConnected()} */}
                <br />
            </div>
        </div>
    );

};

export default Home;
