import React from "react";
import "./SingleMaterial.css";

const SingleMaterial = ({id, name}) => {

    return (
        <li className="single-material" key={id}>
            <div className="material-name">{name}</div>
        </li>
    )
}

export default SingleMaterial;