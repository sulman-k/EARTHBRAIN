import {createContext, useEffect, useState, useContext} from 'react';
const MaterialsContext = createContext();

const MaterialsDataProvider = ({ children }) => {
    const [materials, setMaterials] = useState()

    const fetchMaterialData = () => {
        fetch("http://localhost:7000/api/materials/")
            .then(response => {
                console.log(response)
                return response.json()
            })
            .then(data => {
                console.log(data)
                setMaterials(data);

            }).catch(error => {
            console.log("error:", error)
        })
    }
    useEffect(()=>{
        fetchMaterialData();
    }, [])

    return (
        <MaterialsContext.Provider value={{materials}}>
            {children}
        </MaterialsContext.Provider>
    );
}
const useMaterialData = () => useContext(MaterialsContext);

export { MaterialsDataProvider, useMaterialData };
