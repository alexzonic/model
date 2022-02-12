import React from 'react';
import {Input} from "./Input/Input";
import {Modal} from "./Modal/Modal";
import {Button} from "./Button/Button";

interface Props {

}

export const Component: React.FC<Props> = ({}) => {
    const [infix, setInfix] = React.useState('');
    const [isShowModal, setIsShowModal] = React.useState(false);

    //this is disabling keywords
    /*document.onkeydown = function () {
        return false;
    }*/
    
    return (
        <>
            <Input value={infix} onChange={setInfix} />
            <Button value={'123'} onClick={() => setIsShowModal(!isShowModal)} />
            {isShowModal && <Modal setInfix={setInfix} setIsShowModal={setIsShowModal}/>}
        </>
    );
};