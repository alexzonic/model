import React from 'react';
import "./Modal.scss";
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";

interface Props {
    setInfix: (infix: string) => void,
    onClose: () => void
}

export const Modal: React.FC<Props> = ({onClose, setInfix}) => {
    const [expression, setExpression] = React.useState('')

    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <Input className={'modal-content_input'} value={expression} onChange={setExpression}
                       placeholder={'Введите выражение'}/>
                <div style={{color: "black"}}>
                    Ильюха
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