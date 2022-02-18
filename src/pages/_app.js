import { Web3ReactProvider } from '@web3-react/core';
import { getLibrary } from '../config/web3';

import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="bg-gray-100 h-screen">
        <div className="max-w-7xl mx-auto py-4 sm:px-6 lg:px-8">
          <Component {...pageProps} />
        </div>
      </div>
    </Web3ReactProvider>
  );
}

export default MyApp;
