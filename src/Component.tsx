import React from 'react';
import {Input} from "./content/Input/Input";
import {Button} from "./content/Button/Button";
import {DijkstraTable} from "./content/DijkstraTable/DijkstraTable";
import {Modal} from "./content/Modal/Modal";
import './Component.scss';

interface Props {

}

export const Component: React.FC<Props> = ({}) => {
    const [infix, setInfix] = React.useState('');
    const [isShowModal, setIsShowModal] = React.useState(false);
    const [started, setStarted] = React.useState(false)
    const [stack, setStack] = React.useState('');

    return (
        <>
            <div className="main-page-row">
                <Input
                    value={infix}
                    onChange={setInfix}
                    className="main-page-row_input"
                    placeholder="инфиксная форма"
                />
                <Button
                    value={'Ввести значение'}
                    onClick={() => setIsShowModal(!isShowModal)}
                />
            </div>
            <div className="main-page-row">
                <span className="main-page-row_stack">
                    <div>Стек</div>
                    <textarea 
                        className="main-page-row_stack_textarea" 
                        value={stack} 
                        rows={stack.length + 1 > 7 ? 7 : stack.length + 1}
                        onChange={() => {}} /*только чтоб варнингов в консоли не было*/
                    />
                </span>
                <DijkstraTable />
            </div>
            <Button 
                value={started ? 'Остановить процесс' : 'Начать преобразование'}
                className="main-page-btn"
                onClick={() => setStarted(!started)}
            />
            {isShowModal && <Modal
                setInfix={setInfix}
                onClose={() => setIsShowModal(false)}
                infix={infix}
            />
            }
        </>
    );
};