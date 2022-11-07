import React, {useEffect, useState} from 'react';


const Home: React.FC = () => {
    //state variable to store user's public wallet 
    const [currentAccount, setCurrentAccount] = useState<string>("");

    // check wallet connection when the page loads
    const checkIfWalletIsConnected = async () => {
        // access to window.ethereum
        const {ethereum} = window;
        //check if user has metamask 
        if (!ethereum) {
            alert("Make sure you have metamask");
            return;
        }
        // define avax network values 
        const avax_mainnet = [{
            chainId: '0xA86A',
            chainName: 'Avalanche Mainnet C-Chain',
            nativeCurrency: {
                name: 'Avalanche',
                symbol: 'AVAX',
                decimals: 18
            },
            rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
            blockExplorerUrls: ['https://snowtrace.io/']
        }];  
        // request to add the new network 
        const tx = await ethereum.request({method: 'wallet_addEthereumChain', params: avax_mainnet}).catch();
        if (tx) {
            console.log(tx);
        }
        console.log("Current network", ethereum.networkVersion);
        //get the wallet account
        const accounts = await ethereum.request<string[]>({method: "eth_requestAccounts"});
        if (accounts && accounts.length !== 0 && accounts[0]) {
            setCurrentAccount(accounts[0]); 
        }
    };

    // connect to wallet 
    const connectWallet = async () => {
        try {
            const {ethereum} = window;

            if (!ethereum) {
                alert("Opps, looks like there is no wallet!");
                return;
            }

            const currentNetwork = ethereum.networkVersion;
            console.log("Current network", currentNetwork);

            //check which network the wallet is connected on 
            if (currentNetwork != '4'){
                // prompt user with a message to switch to network 4 which is the rinkeby network on metamask
                alert("Opps, only works on Rinkeby! Please change your //network :)");
                return;
            }

            const accounts = await ethereum.request<string[]>({method: "eth_requestAccounts"});
            if (accounts && accounts.length !== 0 && accounts[0]) {
                setCurrentAccount(accounts[0]); 
            }
        } catch (error){
            console.log(error);
        }
    };

    //run function checkIfWalletIsConnected when the page loads
    useEffect(() => {
        checkIfWalletIsConnected();
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
                {currentAccount === "" ? walletNotConnected()  : walletConnected()}
                <br />
            </div>
        </div>
    );

};

export default Home;
