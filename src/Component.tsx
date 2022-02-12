import React from 'react';
import {Input} from "./content/Input/Input";
import {Button} from "./content/Button/Button";
import {DijkstraTable} from "./content/DijkstraTable/DijkstraTable";
import {Modal} from "./content/Modal/Modal";

interface Props {

}

export const Component: React.FC<Props> = ({}) => {
    const [infix, setInfix] = React.useState('');
    const [isShowModal, setIsShowModal] = React.useState(false);

    return (
        <>
            <Input value={infix} onChange={setInfix}/>
            <Button value={'Ввести значение'} onClick={() => setIsShowModal(!isShowModal)}/>
            <DijkstraTable/>
            {isShowModal && <Modal setInfix={setInfix} onClose={() => setIsShowModal(false)}/>}
        </>
    );
};