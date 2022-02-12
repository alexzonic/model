import {Symbols} from "../domain/OperationSymbol";
import {SyntaxError} from "../domain/SyntaxError";

export function isError(text: string): SyntaxError {
    return {
        isSomeOperationSymbolInARow: isOperationSymbolInARow(text),
        isSomeVariablesInARow: false,
        isMissedOperationSymbol: false,
    };
}

function isOperationSymbolInARow(text: string): boolean {
    for (let i = 0; i < text.length; i++) {
        if (Symbols.includes(text[i])) {
            return true;
        }
    }
    return false;
}

function isSomeVariablesInARow(text: string) {
    for(let i = 0; i < text.length; i++) {
        
    }
}

