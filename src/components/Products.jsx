import React from "react";
import Addproduct from "../components/AddProduct";
import Pagination from "../components/Pagination";
import { Flex,Grid } from "@chakra-ui/react";
import axios from "axios"
import { useEffect ,useState} from "react";
const Products = () => {

  const[page,setpage]=useState(1)
 
  const[product,setproduct]=useState([])
  useEffect(()=>{
    const getdata=async()=>{
      let r=await axios.get(`http://localhost:8080/products?_page=${page}&_limit=5`);
      console.log(r.data)
      setproduct(r.data)
    }
    getdata()
  },[page])
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => < />;
  // const Grid = () => <div />;

  return (
    <Flex>
      {/*  AddProduct */}
      
      <Addproduct/>
     {/* List of Products */}

      {product.map((post)=>{
      return(
        <Grid>
        <div key={post.id}>
          <div className="box">
                   <img style={{height:"200px",width:"300px"}} src={post.imageSrc} alt=""/>
          </div>
          <div style={{display:"flex" ,gap:"50px"}}>
          <div> <p>{post.title}</p></div>
         <div> <p>{post.category}</p></div> 
         </div>
          <p>{post.gender}</p>
          <p>{post.price}</p>
         
    
        </div>
           
      </Grid>
       
      )
      })}
      <br/>
      <Pagination/>
      {/* Pagination */}
     
    </Flex>
  
      
  );
};

export default Products;
