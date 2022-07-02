import React from 'react';
import Card from './Card';
import { generate } from 'shortid';

const List = ({ list ,deleteCard }) => {
    return (
        <div className='flex flex-column'>
            {
                list === undefined &&
                <div className="d-flex align-items-center justify-content-center w-100 p-5">
                    <h1 className="text-center text-muted">No List found</h1>
                </div>
            }
            <div className='flex flex-column'>
                {
                    Object.keys(list).map((listNo) => {
                        return (
                            <div>
                                {
                                    list[listNo].map((card , index) => {
                                        return (
                                            <Card index = {index} cardId={card.listNo} title={card.title} deleteCard={deleteCard} desc={card.desc} key={card.listNo} />
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default List
