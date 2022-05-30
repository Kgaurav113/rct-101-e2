import React, { useState } from "react";
import { Modal,Button,ModalBody,Input,Select,RadioGroup,Radio} from '@chakra-ui/react'
const AddProduct = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const Modal = () => <div />;
  // const ModalBody = () => <div />;
  // const Input = () => <div />;
  // const Select = () => <div />;
  // const RadioGroup = () => <div />;
  // const Radio = () => <div />;
const[modal,setModal]=useState()
const handlechange=(e)=>{
  const inputName=e.target.name;
  setModal({...modal,[inputName]:e.target.value})
}
const handlesubmit=(e)=>{
  e.preventDefault();
  console.log("jj")
}
  return (
    <>
      <Button my={4} data-cy="add-product-button">Add data</Button>
      <Modal onSubmit={handlesubmit}>
        <ModalBody pb={6}>
          <Input data-cy="add-product-title" name="tit" onChange={handlechange}/>
          <Select data-cy="add-product-category"name="category" onChange={handlechange}>
            <option data-cy="add-product-category-shirt" >shirt</option>
            <option data-cy="add-product-category-pant">pant</option>
            <option data-cy="add-product-category-jeans">jean</option>
          </Select>
          <RadioGroup data-cy="add-product-gender"name="gender" onChange={handlechange}>
            <Radio data-cy="add-product-gender-male">male</Radio>
            <Radio data-cy="add-product-gender-female">female</Radio>
            <Radio data-cy="add-product-gender-unisex">unisex</Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" name="price" onChange={handlechange}/>
          <Button data-cy="add-product-submit-button">submit</Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;
