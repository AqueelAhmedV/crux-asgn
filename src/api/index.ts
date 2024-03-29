import { Data } from "../db/dataType";

async function sleep(s: number) {
    return new Promise((resolve, _reject) => {
        setTimeout(() => {
            resolve(1);
        }, s*1000)
    })
}

import { data, summary } from "../db/data";
import { SummaryResponse } from "../components/summary/summaryTypes";

export async function getData(setLoading?: React.Dispatch<React.SetStateAction<boolean>>): Promise<Data> {
    setLoading && setLoading(true)
    await sleep(0.2)
    try {
        await sleep(0.1)
        setLoading && setLoading(false)
        return data
    } catch (err) {
        throw { err }
    }
}

export async function getSummary(setLoading?: React.Dispatch<React.SetStateAction<boolean>>): Promise<SummaryResponse> {
    setLoading && setLoading(true)
    await sleep(0.2)
    try {
        await sleep(0.1)
        setLoading && setLoading(false)
        return summary
    } catch (err) {
        throw { err }
    }
}