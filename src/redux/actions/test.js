import { INCREASE } from '../types'

export const increase = n => {
    return {
        type: INCREASE,
        amount: n
    }
}
