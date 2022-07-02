import React, { useState } from "react";
// import { connect } from "react-redux";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Header from './Header';
import AddCards  from './AddCards';
import List from './List';
import { generate } from 'shortid';
import Popup from './Popup';

const TrelloBoard = () => {

    //states
    const [listNo, setListNo] = useState();
    const [list, setList] = useState({})
    const [modalShow, setModalShow] = useState(false);
    const [deleteModal , setDeleteModal] = useState(false);
    const [deleteIndex , setDeleteIndex] = useState();
    const [error, setError] = useState("");
    const [content, setContent] = useState({
        title: "",
        desc: ""
    });

    //handlers
    const handleChange = (e) => {
        setContent({ ...content, [e.target.name]: e.target.value })
    }

    const handleAdd = () => {
        setModalShow(true);
    }
    const deleteAfterPopUp = () => {
        let newllist = [];
        let temp = list[listNo];
        for(let i=0;i<temp.length;i++){
            if(i!==deleteIndex) newllist.push(temp[i]);
        }
        setList({[listNo] : newllist});
        setDeleteModal(false);
    } 
    const deleteCard = (n) => {
        setDeleteModal(true);
        setDeleteIndex(n);
    }
 
    const handleCancel = (n) => {
        setDeleteModal(false);
    }
    const handleSubmit = () => {

        let num = generate();
        setList(num);
        if (content.title.length === 0 || content.title.length > 30) {
            setError("Title length should be 0-30 characters");
            return;
        }
        if (content.desc.length === 0 || content.title.length > 150) {
            setError("Description length should be 0-150 characters");
            return;
        }

        if (list[listNo]) {
            setList({ ...list, [listNo] : [...list[listNo] , content] })
        }
        else { 
            const newList = [content];
            setList({ ...list, [listNo]: newList })
        }

        setContent({
            title: "",
            desc: ""
        })
        setModalShow(false);
        setError(null);
    }

    return (
        <div>
            <div>
                <Header handleAdd={handleAdd} />
                <AddCards  
                    modalShow={modalShow}
                    handleClose={() => {
                        setError(null)
                        setModalShow(false)
                    }}
                    handleChange={handleChange}
                    content={content}
                    error={error}
                    listNo={listNo}
                    handleListNo={(e) => {
                        setListNo(generate())
                    }}
                    handleSubmit={handleSubmit}
                />
                <List list={list} deleteCard={deleteCard} key = {listNo || generate()}/>
            </div>
            {deleteModal && <Popup deleteAfterPopUp={deleteAfterPopUp} handleCancel={handleCancel}/>}
        </div>
    )
}

export default TrelloBoard;