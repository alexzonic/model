import React from 'react';
import {Input} from "./content/Input/Input";
import {Button} from "./content/Button/Button";
import {DijkstraTable} from "./content/DijkstraTable/DijkstraTable";
import {Modal} from "./content/Modal/Modal";
import './Component.scss';
import {transform} from "./utils/transformation";

interface Props {

}

export const Component: React.FC<Props> = ({}) => {
    const [infix, setInfix] = React.useState('');
    const [postfix, setPostfix] = React.useState('');
    const [isShowModal, setIsShowModal] = React.useState(false);
    const [started, setStarted] = React.useState(false)
    const [stack, setStack] = React.useState('');
    const [activeCell, setActiveCell] = React.useState({topIndex: 0, leftIndex: 0})

    React.useEffect(() => {
        if (!started)
            return;
        const timer = setInterval(() => {
            if (!started)
                return;
            const result = transform(infix, setStack, setPostfix);
            setActiveCell({topIndex: result.topIndex, leftIndex: result.leftIndex});
            if (result.end) {
                setStarted(false);
                setActiveCell({topIndex: 0, leftIndex: 0})
            }
        }, 1500);
        return () => clearInterval(timer);
    }, [started])

    return (
        <>
            <div className="main-page-input-row">
                <div className="main-page-input-row_column">
                    <label className="main-page-input-row_column_label">Входное значение</label>
                    <Input
                        value={infix}
                        onChange={setInfix}
                        className="main-page-input-row_column_input"
                        placeholder="инфиксная форма"
                    />
                    <label className="main-page-input-row_column_label">Выходное значение</label>
                    <Input
                        value={postfix}
                        onChange={setPostfix}
                        className="main-page-input-row_column_input"
                        placeholder="постфиксная форма"
                    />
                </div>
                <div className="main-page-input-row_column">
                    <Button
                        value={'Ввести значение'}
                        onClick={() => setIsShowModal(!isShowModal)}
                        className="main-page-input-row_column_button"
                    />
                    <Button
                        value={'Сбросить'}
                        onClick={() => {
                            setInfix('');
                            setStack('');
                            setPostfix('');
                            setActiveCell({topIndex: 0, leftIndex: 0})
                        }}
                        className="main-page-input-row_column_button"
                    />
                </div>
            </div>
            <div className="main-page-row">
                <span className="main-page-row_stack">
                    <div>Стек</div>
                    <textarea
                        className="main-page-row_stack_textarea"
                        value={stack}
                        rows={stack.length + 1 > 7 ? 7 : stack.length + 1}
                        onChange={() => {
                        }} /*только чтоб варнингов в консоли не было*/
                    />
                </span>
                <DijkstraTable activeCellTopIndex={activeCell.topIndex} activeCellLeftIndex={activeCell.leftIndex}/>
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