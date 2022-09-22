import {
    Mainnet,
    DAppProvider,
    useEtherBalance,
    useEthers,
    Config,
    Goerli
} from '@usedapp/core'
import { getDefaultProvider } from 'ethers'

import '../../styles/app.scss'

const config: Config = {
    readOnlyChainId: Mainnet.chainId,
    readOnlyUrls: {
        [Mainnet.chainId]: getDefaultProvider('mainnet'),
        [Goerli.chainId]: getDefaultProvider('goerli')
    }
}

export default function App({ Component, pageProps }) {
    return (
        <DAppProvider config={config}>
            <Component {...pageProps} />
        </DAppProvider>
    )
}
