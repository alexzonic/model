import React from 'react';
import "./Modal.scss";
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import {ModalTable} from "../InputNumbers/ModalTable";
import {inputNumbersBlockMatrix, inputOperatorsBlockMatrix} from "../../domain/InputNumbers";

interface Props {
    setInfix: (infix: string) => void,
    onClose: () => void
}

export const Modal: React.FC<Props> = ({onClose, setInfix}) => {
    const [expression, setExpression] = React.useState('')

    const handleInput = (value:string) => {
        setExpression(expression+value)
    }
    
    
    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <Input className={'modal-content_input'} value={expression} onChange={setExpression}
                       placeholder={'Введите выражение'}/>
                <div className={"modal-content_tables"}>
                    <ModalTable onClick={handleInput} matrix={inputNumbersBlockMatrix}/>
                    <ModalTable onClick={handleInput} matrix={inputOperatorsBlockMatrix}/>
                </div>
                <div className="modal-content_buttons">
                    <Button value={'Применить'} onClick={() => {
                        setInfix(expression);
                        onClose();
                    }}/>
                    <Button value={'Отменить'} onClick={onClose}/>
                </div>
            </div>
        </div>
    );
};