import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./MaterialDetails.css"

const MaterialDetails = () => {
    const [material, setMaterial] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const [isCreating, setIsCreating] = useState(false);

    const navigate = useNavigate();

    const [newMaterial, setNewMaterial] = useState({
        name: '',
        color: '',
        volume: '',
        cost: '',
        delivery_date: '',
    });

    const params = useParams();

    useEffect(() => {
        let isMounted = true;
        const fetchMaterial = async () => {
            try {
                const response = await axios.get(`http://localhost:7000/api/materials/${params.id}`);
                // setMaterial(response.data);
                if (isMounted) setMaterial(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        if (params.id) {
            fetchMaterial();
        }


        return () => {
            isMounted = false;
        };


    }, [params.id]);

    useEffect(() => {
        if (isEditing || isCreating) {
            setNewMaterial(material);
        }

    }, [isEditing, isCreating, material]);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setIsCreating(false);
        setNewMaterial(material);
    };

    const handleSave = async () => {
        try {
            // await axios.put(`http://localhost:7000/api/materials/${params.id}`, newMaterial);

            const response =  await axios.put(`http://localhost:7000/api/materials/${params.id}`, newMaterial);
            setIsEditing(false);
            setIsCreating(false);
            // setMaterial(newMaterial);
            setMaterial(response.data)
            console.log(params.id)
            navigate(`/${params.id}`);
        } catch (error) {
            console.error(error);
        }
    };
    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:7000/api/materials/${params.id}`);
            setIsEditing(false);
            setIsCreating(false);
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    };


    const handleCreateSave = async () => {
        try {
            const response = await axios.post(`http://localhost:7000/api/materials/`, newMaterial);
            //  await axios.post(`http://localhost:7000/api/materials/`, newMaterial);
            setIsCreating(false);
            console.log(response)
            // setMaterial(newMaterial);
            setMaterial(response.data);
            navigate(`/${response.data.id}`);
        } catch (error) {
            console.error(error);
        }
    };

    const handleCreate = () => {
        setMaterial({
            name: '',
            color: '',
            volume: '',
            cost: '',
            delivery_date: '',
        });
        setNewMaterial({
            name: '',
            color: '',
            volume: '',
            cost: '',
            delivery_date: '',
        });
        setIsEditing(false);
        setIsCreating(true);
    };

    const handleInputChange = (event) => {
        setNewMaterial({
            ...newMaterial,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <div className='MaterialList-container p-5'>

            <h1>EARTHBRAIN</h1>
            <button  className='my-3 btn btn-primary' onClick={handleCreate}>Create New</button>



            <div className="row mb-3">
                <label htmlFor="name" className="col-sm-4 col-form-label" >Name</label>
                <div className="col-sm-8">
                    {isEditing || isCreating ? (
                        <input className="form-control" id='name' name="name" value={newMaterial?.name} onChange={handleInputChange} />
                    ) : (
                        <span className=''>{material?.name}</span>
                    )}
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="color" className="col-sm-4  col-form-label">Color</label>
                <div className="col-sm-8">
                    {isEditing || isCreating ? (
                        <input type="color"  style={{width: '40px', padding: '0'}} className="form-control" id='color' name="color" value={newMaterial?.color} onChange={handleInputChange}  />
                    ) : (
                        <span >{material?.color}</span>
                    )}
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="volume" className="col-sm-4 col-form-label">Volume</label>
                <div className="col-sm-8">
                    {isEditing || isCreating ? (
                        <input  className='form-control' id='volume' name="volume" value={newMaterial?.volume} onChange={handleInputChange}  />
                    ) : (
                        <span >{material?.volume}</span>
                    )}
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="cost" className="col-sm-4 col-form-label">Cost</label>
                <div className="col-sm-8">
                    {isEditing || isCreating ? (
                        <input  className='form-control' id='cost' name="cost" value={newMaterial?.cost} onChange={handleInputChange}  />
                    ) : (
                        <span >{material?.cost}</span>
                    )}
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="delivery_date" className="col-sm-4 col-form-label">Delivery Date</label>
                <div className="col-sm-8">
                    {isEditing || isCreating ? (
                        <input className='form-control' id='delivery_date' name="delivery_date" value={newMaterial?.delivery_date} onChange={handleInputChange}  />
                    ) : (
                        <span >{material?.delivery_date}</span>
                    )}
                </div>
            </div>



            {isEditing ? (
                <div className='mt-3'>
                    <button className='btn btn-warning me-4'  onClick={handleCancel}>Cancel</button>
                    <button className='btn btn-success'  onClick={handleSave}>Save</button>
                </div>
            ) : (
                isCreating ? (
                    <div  className='mt-3' >
                        <button className='btn btn-warning me-4' onClick={handleCancel}>Cancel</button>
                        <button  className='btn btn-success'  onClick={handleCreateSave}>Save Created Material</button>
                    </div>
                ) : (
                    <div  className='mt-3' >
                    <button className='mt-3 btn btn-info me-4'  onClick={handleEdit}>Edit</button>
                        <button className='mt-3 btn btn-danger'  onClick={handleDelete}>Delete</button>
                    </div>
                )
            )}
        </div>
    );

}
export default MaterialDetails;
