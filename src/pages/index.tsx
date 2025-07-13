import { ConnectWallet, Web3Button } from "@thirdweb-dev/react";
import { SmartContract } from "@thirdweb-dev/sdk";

// NFT Contract Address
const NFT_CONTRACT_ADDRESS = "0xd9eFDD5d4693C8c6e5782b62Df251816942976d2";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">BetterCallZaal NFT Project</h1>
        <p className="text-xl text-gray-600">Purchase your exclusive NFT with AVAX</p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">BetterCallZaal Flicks</h2>
            <p className="text-gray-700 mb-4">
              Exclusive digital collectibles from the BetterCallZaal universe. Own a piece of digital art that represents the vibrant community at bettercallzaal.com.
            </p>
            <div className="space-y-2">
              <p><span className="font-semibold">Collection:</span> BetterCallZaal Flicks</p>
              <p><span className="font-semibold">Blockchain:</span> Avalanche (AVAX)</p>
              <p><span className="font-semibold">Price:</span> $0.51 USD</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-6 rounded-lg text-white">
            <h3 className="text-xl font-bold mb-2">Benefits</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Exclusive access to community events</li>
              <li>Special voting rights on future projects</li>
              <li>Digital ownership verified on blockchain</li>
              <li>Future airdrops for NFT holders</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Purchase Your NFT</h2>
          <div className="flex flex-col items-center space-y-4">
            <ConnectWallet 
              theme="dark"
              btnTitle="Connect Wallet"
            />
            
            <Web3Button
              contractAddress={NFT_CONTRACT_ADDRESS}
              action={(contract: SmartContract) => {
                contract.erc721.claim(1)
              }}
              onSuccess={() => alert("Successfully purchased NFT!")}
              onError={(error: Error) => alert("Error purchasing NFT: " + error.message)}
            >
              Buy NFT for $0.51
            </Web3Button>
            
            <p className="text-sm text-gray-500 mt-2">You can pay with AVAX or credit card</p>
          </div>
        </div>
      </div>

      <footer className="mt-16 text-center text-gray-600">
        <p>© 2025 BetterCallZaal NFT Project. All rights reserved.</p>
        <p className="mt-2">For support: support@bettercallzaal.com</p>
      </footer>
    </div>
  );
}
