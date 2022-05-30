import React from "react";
import Addproduct from "../components/AddProduct";
import Pagination from "../components/Pagination";
import { Flex,Grid } from "@chakra-ui/react";
import axios from "axios"
import { useEffect ,useState} from "react";
const Products = () => {

  const[page,setpage]=useState(1)
  const[lastpage,setlastpage]=useState(0)
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
        <div>
          <div className="box">
                   <img src={post.imageSrc} alt=""/>
          </div>
           <p>{post.title}</p>
          <p>{post.category}</p>
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
