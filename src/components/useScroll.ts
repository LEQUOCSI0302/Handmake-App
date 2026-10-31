import { useEffect, useState } from "react";

export default function useScroll(nguong = 30) {
    const [daCuon, setDaCuon] = useState(false);

    useEffect(() => {
        const xuLyCuon = () => {
            setDaCuon(window.scrollY > nguong);
        };

        xuLyCuon();

        window.addEventListener("scroll", xuLyCuon, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", xuLyCuon);
        };
    }, [nguong]);

    return daCuon;
}