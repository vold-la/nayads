import React , {useState} from 'react'
import '../styles/Card.css'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Card = ({ title, desc, cardId , deleteCard , index }) => {
    return (
        <div key={cardId}>
            <div className="card_body card m-3">
                <div className="card-body ml-2">
                    <DeleteOutlineIcon onClick={(e) => deleteCard(index)} style={{float  :'right'}}/>
                    <h4 className="card-title ">{title}</h4>
                    <p className="card-text">{desc}</p>
                </div>

            </div>
        </div>
    )
}

export default Card
