import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { IME_APLIKACIJE } from "../constants";

export default function Home() {
    return (
        <>
            <h1>Dobrodošli na {IME_APLIKACIJE}</h1>
            <div style={{maxWidth: '300px', margin: 'auto'}}>
                <DotLottieReact
                src="/bottle.lottie"

                loop
                autoplay

                />
            </div>
        </>
    )
}