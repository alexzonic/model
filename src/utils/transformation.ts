import {dijkstraMatrix, five, four, one, six, three, two} from "../domain/Dijkstra";
import {infixValidator} from "./errorUtils";

let inputChanged = false;
let index = 0;

let onStackChange: (s: string) => void;
let stack = '';
let onOutputChange: (s: string) => void;
let output = '';
let input: string[] = [];
const onInputChange = (index: number) => {
    input = input.filter((_, idx) => idx !== index);
    inputChanged = true;
}

export function transform(
    infixForm: string,
    stackChanger: (value: string) => void,
    outputChanger: (value: string) => void,
) {
    if (!onStackChange) {
        onStackChange = stackChanger;
        onOutputChange = outputChanger;
        input = getInputValues(infixForm);
        stack = '';
        output = '';
    }

    if (input.length === 0 && stack.length === 0) {
        //@ts-ignore
        onStackChange = undefined;
        return {end: true, topIndex: 0, leftIndex: 0};
    }

    const validateResult = infixValidator(infixForm, index);
    if(validateResult.isError){
        alert(validateResult.message)
        //@ts-ignore
        onStackChange = undefined;
        return {end: true, topIndex: 0, leftIndex: 0};
    }

    const {topIndex, leftIndex} = findCommand(input[index], getLastStackValue())

    executeCommand(dijkstraMatrix[leftIndex][topIndex], index);

    if (index >= input.length) {
        index = 0;
    } else if (!inputChanged) {
        ++index;
    } else {
        inputChanged = false;
    }
    return {end: false, topIndex, leftIndex};
}

function findCommand(inputValue: string, stackValue: string) {
    let topIndex = dijkstraMatrix[0].indexOf(inputValue);
    if (topIndex === -1) {
        topIndex = input.length === 0 ? 1 : 10;
    }
    let leftIndex = 1;
    for (let i = 1; i < dijkstraMatrix.length; i++) {
        if (dijkstraMatrix[i][0] === stackValue) {
            leftIndex = i;
            return {topIndex, leftIndex};
        }
    }
    return {topIndex, leftIndex};
}

function executeCommand(command: string, index: number) {
    switch (command) {
        case one:
            processCommandONE(index)
            break;
        case two:
            processCommandTwo()
            break;
        case three:
            processCommandThree(index)
            break;
        case five:
            processCommandFive()
            break;
        case six:
            processCommandSix(index)
            break;
        default:
            return null;
    }
}

function processCommandONE(index: number) {
    const value = input[index];
    onInputChange(index);
    stack += value;
    onStackChange(stack);
}

function processCommandTwo() {
    const value = getLastStackValue();
    stack = stack.slice(0, stack.length - 1);
    onStackChange(stack);
    output += value;
    onOutputChange(output);
}

function processCommandThree(index: number) {
    onInputChange(index);
    onStackChange(stack.slice(0, stack.length - 1));
}

function processCommandFive() {
    throw new Error('ошибка скобочной структуры');
}

function processCommandSix(index: number) {
    const value = input[index];
    output += value;
    onInputChange(index);
    onOutputChange(output);
}

function getInputValues(infixForm: string): string[] {
    let infix = [];
    for (let i = 0; i < infixForm.length; i++) {
        infix.push(infixForm[i]);
    }
    return infix;
}

function getLastStackValue() {
    if (stack.length === 0) {
        return '';
    }
    return stack[stack.length - 1];
}