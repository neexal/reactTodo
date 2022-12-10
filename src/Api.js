import axios from 'axios'
import React from 'react'


const Api = () => {
    const [allData, setAllData] = React.useState([]);

    const getAllData = async () => {
        await axios.get('https://638f29464ddca317d7f026d5.mockapi.io/users').then(res => {
            console.log(res.data);
            setAllData(res.data)
        })
    }
    React.useEffect(() => {
        getAllData()
    }, [])

    const deleteUser=async(e, id)=>{
        e.preventDefault()
        let data = allData.filter((res)=>{
            return res.id !== id;
        })
       console.log(data);
       await fetch(`https://638f29464ddca317d7f026d5.mockapi.io/users/${id}`, {
        method: 'DELETE'
      });
      setAllData(data)
    }
    return (
        <>
            {/* <div key={res.id}>
          <img src={res.avatar} alt="imguser" height={100} width={100} />
          <p>{res.name}</p>
          <span>{res.createdAt}</span>
      </div> */}

            <table border={1} width='100%'>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Image</td>
                        <td>Created At</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        allData.map((res, i) => {
                            return (
                                <tr key={res.id}>
                                    <td>{res.id}</td>
                                    <td>{res.name}</td>
                                    <td><img src={res.avatar} height={100} width={100} alt={res.createdAt} /></td>
                                    <td>{res.createdAt}</td>
                                    <td>
                                        <button className="btnEdit">Edit</button>
                                        <button className="btnDelete" onClick={(e)=>deleteUser(e, res.id)} >Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
export default Api