export type Row = {
    cells: Cell[];
}

export type Cell = {
    id?: string;
    value: string;
}

export function createTable(matrix: Array<string[]>) {
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

export const empty = '$';
export const plus = '+';
export const minus = '-';
export const mult = '*';
export const divide = '/';
export const pow = '^';
export const leftQuote = '(';
export const rightQuote = ')';
export const func = 'F';
export const value = 'P';
export const one = '1';
export const two = '2';
export const three = '3';
export const four = '4';
export const five = '5';
export const six = '6';

export const dijkstraMatrix: Array<string[]> = [
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