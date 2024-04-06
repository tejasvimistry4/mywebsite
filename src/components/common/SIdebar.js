import React from 'react';
import './Sidebar.css';

function SIdebar() {
    return (
        <div>
            <div className="d-flex flex-column flex-shrink-0 bg-dark" >
               
                <h2 className="text-white">Sidebar</h2>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SIdebar;
