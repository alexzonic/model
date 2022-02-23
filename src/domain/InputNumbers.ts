import {divide, leftQuote, minus, mult, plus, pow, rightQuote} from "./Dijkstra";

export const inputNumbersBlockMatrix : Array<string[]> = [
    ['1', '2', '3', leftQuote],
    ['4', '5', '6', rightQuote],
    ['7', '8', '9',''],
    ['', '0', '', '']
]

export const inputOperatorsBlockMatrix : Array<string[]> = [
    ['a', plus],
    ['b', minus],
    ['c', mult],
    ['d', divide],
    ['e', pow],
]
