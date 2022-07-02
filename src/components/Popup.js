import "../styles/AddCardContent.css";
import { Button } from 'react-bootstrap'
import React from "react";


function Popup({ deleteAfterPopUp  , handleCancel}) {
    return (
        <div className="delete-box">
            <div className="deleteBox">
                <p>Alert!! Click on Confirm to delete or Cancel to exit out</p>
                <Button variant="primary" size="lg" active onClick={deleteAfterPopUp} >
                    Confirm
                </Button>
                {' '}
                <Button variant="secondary" size="lg" active onClick={handleCancel} >
                    Cancel
                </Button>
            </div>
        </div>
    );
}

export default Popup;