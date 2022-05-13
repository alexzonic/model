import {Symbols} from "../domain/OperationSymbol";
import {SyntaxError} from "../domain/SyntaxError";
import {Operands} from "../domain/Operand";

export function infixValidator(text: string, index: number): SyntaxError {
    const error: SyntaxError = {
        isError: true,
        message: ""
    }
    if(validateStartedInfix(text)){
        error.message = "Ошибка в начале.";
        return error;
    }
    if(validateOperationSymbolInARow(text, index)){
        error.message = "Ошибка: Подряд две операции.";
        return error;
    }
    if(validateSomeVariablesInARow(text, index)){
        error.message = "Ошибка: Подряд 2 переменные.";
        return error;
    }
    if(validateMissedOperationSymbol(text, index)){
        error.message = "Ошибка: между скобкой и переменной отсутствует символ операции";
        return error;
    }
    
    error.isError = false;
    return error;
}

function validateStartedInfix(text: string): boolean{
    return Symbols.includes(text[0]) || text[0] == ')'
}

function validateOperationSymbolInARow(text: string, index: number): boolean {
    if(text.length < 2 || text.length === index + 1) return false;
    
    return Symbols.includes(text[index]) && Symbols.includes(text[index + 1]);
}

function validateSomeVariablesInARow(text: string, index: number): boolean {
    if(text.length < 2 || text.length === index + 1) return false;

    return Operands.includes(text[index]) && Operands.includes(text[index + 1]);
}

function validateMissedOperationSymbol(text: string, index: number): boolean {
    if(text.length < 2 || text.length === index + 1) return false;

    if(!Symbols.includes(text[index]) && text[index + 1] === '('){
        return true;
    }
    
    return text[index] === ')' && Symbols.includes(text[index - 1]);
}

