import React, {useEffect, useState} from 'react';
import { useMaterialData } from "../../Store/MaterialsContext";
import './MaterialList.css';
import { NavLink } from "react-router-dom";

const MaterialList = () => {
    const { materials } = useMaterialData();
    const [selectedItem, setSelectedItem] = useState(materials ? materials[0] : null);

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };




    const list = materials?.map((item) => {
        const activeStyle = {
            textDecoration: "none",
            // color: "#fff",
            padding: "10px",
            borderRadius: "5px",
            // backgroundColor: "#3f51b5",
            textAlign: "left",
            display: "block",
            border: "none",
            width: "100%"
        };
        const inactiveStyle = {
            textDecoration: "none",
            // color: "#000",
            padding: "10px",
            borderRadius: "5px",
            // backgroundColor: "#f5f5f5",
            textAlign: "left",
            display: "block",
            border: "none",
            width: "100%"
        };
        const style = selectedItem === item ? activeStyle : inactiveStyle;

        return (
            <NavLink
                to={`/${item.id}`}
                key={item.id}
                onClick={() => handleItemClick(item)}
                className='material-list-items'
            >
                <button className='btn btn-outline-info' style={style}>{item.name}</button>
            </NavLink>
        );
    });

    // style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#f8b195", boxShadow: "5px 5px 20px #888888", borderRadius: "10px", padding: "20px" }
    // style={{ width:"10rem", border: "2px solid #fff", borderRadius: "10px" }}
    return (

            <div className='material-list-container pe-5'>
                {list}
            </div>
    );
};

export default MaterialList;
