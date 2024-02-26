import { flushSync } from "react-dom";

export function tryViewTransition<T>(func: (...args:T[]) => void, ...args: T[]) {
    if (document.startViewTransition) {
        document.startViewTransition(() => flushSync(() => {
            func(...args)
        }))
    } else {
        func(...args)
    }
}