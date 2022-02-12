export type Row = {
    cells: Cell[];
}

export type Cell = {
    id?: string;
    value: string;
}

export function createTable() {
    const result: Row[] = [];
    const head = matrix[0];

    result.push({
        cells: head.map((v) => {
            return {id: undefined, value: v}
        })
    })

    for (let i = 1; i < matrix.length; i++) {
        const row = matrix[i];
        const operator = row[0];
        const cells: Cell[] = [{id: undefined, value: operator}];
        for (let j = 1; j < row.length; j++) {
            cells.push({id: `${head[i]}_${operator}`, value: row[j]})
        }
        result.push({cells})
    }

    return result;
}

const empty = '$';
const plus = '+';
const minus = '-';
const mult = '*';
const divide = '/';
const pow = '^';
const leftQuote = '(';
const rightQuote = ')';
const func = 'F';
const value = 'P';
const one = '1';
const two = '2';
const three = '3';
const four = '4';
const five = '5';
const six = '6';

const matrix: Array<string[]> = [
    ['', empty, plus, minus, mult, divide, pow, leftQuote, rightQuote, func, value],
    [empty, four, one, one, one, one, one, one, five, one, six],
    [plus, two, two, two, one, one, one, one, two, one, six],
    [minus, two, two, two, one, one, one, one, two, one, six],
    [mult, two, two, two, two, two, one, one, two, one, six],
    [divide, two, two, two, two, two, one, one, two, one, six],
    [pow, two, two, two, two, two, two, one, two, one, six],
    [leftQuote, five, one, one, one, one, one, one, three, one, six],
    [func, two, two, two, two, two, two, one, two, five, six],
]