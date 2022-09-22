import { useEthers } from '@usedapp/core'
import { useState } from 'react'

import HoverItem from '../components/HoverItem'

export default function Home() {
    const { activateBrowserWallet, account, deactivate } = useEthers()

    return (
        <div>
            {!account && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-10 py-6 glass flex flex-col items-center max-w-[35%]">
                    <span className="text-12 tracking-widest uppercase opacity-75 mb-4">
                        Welcome
                    </span>
                    <h1 className="text-center mb-8 text-24 font-700">
                        First, we need you to connect your wallet so we can
                        grant you access to Meta Curriculum
                    </h1>
                    <button
                        className="button"
                        onClick={() => activateBrowserWallet()}
                    >
                        Connect
                    </button>
                </div>
            )}
            {account && (
                <p className="text-12 absolute top-[1.2rem] left-[1.2rem] opacity-50">
                    Connected wallet : {account}
                </p>
            )}
            {account && (
                <button
                    className="text-12 absolute right-[1.2rem] top-[1.2rem] font-700"
                    onClick={() => deactivate()}
                >
                    Disconnect
                </button>
            )}
            {account && (
                <>
                    <div className="absolute top-1/2 -translate-y-1/2 max-w-1/2 left-[5%] h-3/4 filter grayscale">
                        <HoverItem
                            top={'top-[32.5%]'}
                            left={'left-[43%]'}
                            width={'w-[7%]'}
                            src="/img/golf.png"
                            text="Golf passionate"
                        />
                        <HoverItem
                            top={'top-[42.5%]'}
                            left={'left-[20%]'}
                            width={'w-[4%]'}
                            src="/img/horloge.png"
                            text="Time tracking, ponctuality"
                        />
                        <HoverItem
                            top={'top-[64%]'}
                            left={'left-[83.5%]'}
                            width={'w-[12.5%]'}
                            src="/img/plante.png"
                            text="Values eco responsability"
                        />
                        <img
                            src="/img/base.png"
                            className="max-h-full max-w-full"
                        />
                    </div>
                    <div className="absolute right-[5%] w-[40%] glass top-1/2 -translate-y-1/2 flex flex-col items-center p-4 text-center">
                        <span className="text-24 font-700 mb-1">
                            John's room
                        </span>
                        <p className="text-14 leading-1 opacity-75 px-4">
                            Full-Stack Developer working mostly on WordPress
                            custom themes, I'm here to bring new ideas to your
                            future projects, using every tool that could be
                            useful to help your vision come true.
                        </p>
                        <div></div>
                    </div>
                </>
            )}
        </div>
    )
}
