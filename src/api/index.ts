import { Data } from "../db/dataType";

async function sleep(s: number) {
    return new Promise((resolve, _reject) => {
        setTimeout(() => {
            resolve(1);
        }, s*1000)
    })
}

import { data } from "../db/data";

export async function getData(setLoading: React.Dispatch<React.SetStateAction<boolean>>): Promise<Data> {
    setLoading(true)
    await sleep(0.2)
    try {
        await sleep(0.1)
        setLoading(false)
        return data
    } catch (err) {
        throw { err }
    }
}