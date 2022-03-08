import { useEffect, useRef } from "react";

export default function useOnClickOutside(handler) {
    const closeRef = useRef();
    useEffect(() => {
        const handlerCheck = (event) => {
            if (!closeRef.current.contains(event.target)) {
                handler();
            }
        }
        document.addEventListener('mousedown', handlerCheck);
        return () => {
            document.removeEventListener('mousedown', handlerCheck);
        }
    })

    return closeRef;
}