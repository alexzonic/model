import React, {useState} from 'react';
import "./Modal.scss";
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";

interface Props {
    setInfix: (infix: string) => void,
    setIsShowModal: (isShowModal: boolean) => void
}

export const Modal: React.FC<Props> = ({setIsShowModal, setInfix}) => {
    const [expression, setExpression] = React.useState('')
    
    return (
        <div className="modal" onClick={() => setIsShowModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <Input className={'modal-content_input'} value={expression} onChange={setExpression} placeholder={'Введите выражение'}/>
                <div style={{color: "black"}}>
                    Ильюха
                </div>
                <div className="modal-content_buttons">
                    <Button value={'Применить'} onClick={() => {setInfix(expression); setIsShowModal(false)}}/>
                    <Button value={'Отменить'} onClick={() => setIsShowModal(false)}/>
                </div>
            </div>
        </div>
    );
};