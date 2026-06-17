import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Counter = ({ end, suffix = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        let start = 0;
        const duration = 1500;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
            start += increment;

            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);

    }, [isInView, end]);

    return (
        <span ref={ref}>
            {count}{suffix}
        </span>
    );
};

export default Counter;