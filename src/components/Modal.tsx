// import React from 'react';
import EntryForm from './EntryForm'

type Props = {
    id?: string[],
    open: boolean;
    onClose: () => void;
}

const Modal = ( props: Props ) => {
    if ( !props.open ) return (<></>)
    return (
        <div onClick={ props.onClose } className="fixed w-screen h-screen flex overflow-auto z-1 justify-center align-middle bg-gray-300 bg-opacity-25">
            <div onClick={(e) => { e.stopPropagation() }} className="max-w-sm w-2/5 fixed flex z-1 mt-5 bg-white shadow-2xl rounded">
                <div className="w-full flex flex-col">
                    <div className="flex flex-row space-x-20 mb-3 bg-amber-600">
                        <p onClick={props.onClose} className="flex justify-start m-3 py-1 px-2 rounded hover:bg-slate-800 text-white text-lg">X</p>
                        <p className="mx-4 py-4 text-white text-lg">Drink Entry</p>
                    </div>
                    <div className="flex flex-col items-center text-center mt-0 p-1">
                        <EntryForm id={ props.id } onClose={props.onClose} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
