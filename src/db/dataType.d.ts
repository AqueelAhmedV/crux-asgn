import { data } from './data.js'

type RawData = typeof data
type DataType = keyof RawData


type SalesData = typeof RawData['sales']
type MarketingData = typeof RawData['marketing']
type AccountingData = typeof RawData['accounting']

type Data = RawData