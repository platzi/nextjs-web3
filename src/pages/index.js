import { useCallback } from 'react';
import Head from 'next/head';
import { useWeb3React } from '@web3-react/core';
import { connector } from '../config/web3';

export default function Home() {

  const { active, activate, deactivate, account, error, chainId } = useWeb3React();

  const connect = useCallback(() => {
    activate(connector);
    localStorage.setItem('previouslyConnected', 'true');
  }, [activate]);

  const disconnect = useCallback(() => {
    deactivate();
    localStorage.removeItem('previouslyConnected');
  });

  return (
    <>
      <Head>
        <title>GNFT V3</title>
      </Head>
      <div className="bg-gray-100 mt-64">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r to-red-600 from-blue-500">Ready to dive in?</span>
            <span className="block text-gray-500 text-lg">
              {!active ? 'Start minting your nft' : `Wallet: ${account}`}
            </span>
            <span className="block text-gray-500 text-lg">Start minting your nft</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              {!active ? (
                <button
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                  onClick={connect}
                >
                  Conectar Wallet
                </button>
              ) : (
                <button
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                  onClick={disconnect}
                >
                  Mint
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
