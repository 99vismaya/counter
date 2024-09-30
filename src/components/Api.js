import React, {useEffect,useState} from 'react'
import 'primeicons/primeicons.css';

const Api = () => {
    const [data, setData] = useState([]);
    const [search,setSearch] = useState("")
    const [filteredUsers, setFilteredUsers] = useState([])


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setData(data);
        setFilteredUsers(data)
      });
  }, []);

  const handledelete=(index)=>{
    setData(data.filter((products) => products.id !== index ))
  }

  const handlechange=(e)=>{
    setSearch(e.target.value)
    const filteredItems = data.filter((products) =>
      products.category.toLowerCase().includes(e.target.value.toLowerCase())  //we use e.target.value inside includes as setSearch will work after completion of the whole function execution hence to get value for every value we enter we use e.target.value
      );
  
      setFilteredUsers(filteredItems);
      // console.log(search)
      // console.log(filteredItems)
  }

  return (
    <>
    <h1 style={{textAlign:"center"}}>Api Fetch</h1>
    <input value={search} onChange={handlechange} placeholder="Search"/>
    <div className='container-fluid mt-5'>
        <div className='row '>
           {filteredUsers.map((products)=>(
            <div key={products.id} className='col-10 col-md-4 mt-5'>
            <div className='card p-2'>
                <div className='align-items-center' >
                    <div className='title text-center'>{products.title}</div>
                    <div className='image text-center'><img src={products.image} alt='...' className='rounded' width="155"/></div>
                    <div className='author'>Category: {products.category}</div>
                    <div className='author'>Description: {products.description}</div>
                    <div className='author'>Price: {products.price}</div>
                    <div className='price'>Ratings: {products.rating.rate} Available: {products.rating.count}</div>
                </div>
                <button onClick={()=>handledelete(products.id)}>Delete</button>
            </div>
            </div>
            ))} 
        </div>
    </div>
    </>
  )
}
export default Api;