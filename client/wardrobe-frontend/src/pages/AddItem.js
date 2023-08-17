import { useState } from 'react'
import ItemForm from '../components/ItemForm'
import styles from '../css/AddItem.module.css'

const AddItem = () => {
  const [typeOfItem, setTypeOfItem] = useState('');

  const handleTypeChange = e => {
    setTypeOfItem(e.target.value);
  }

  return (
    <div className="add">
      <h2>Add a new item to your wardrobe</h2>
      <select className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleTypeChange}>
        <option value="">Type of item</option>
        <option value="tShirt">T-shirt</option>
        <option value="shirt">Shirt</option>
        <option value="sweater">Sweater</option>
        <option value="trousers">Trousers</option>
        <option value="shorts">Shorts</option>
        <option value="jacket">Jacket</option>
        <option value="shoes">Shoes</option>
        <option value="accessory">Accessory</option>
      </select>
      {(typeOfItem === '' && <div className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><p>You must choose a type...</p></div>)}
      {(typeOfItem === 'tShirt' && <ItemForm typeOfItem={typeOfItem} />)}
      {(typeOfItem === 'shirt' && <ItemForm typeOfItem={typeOfItem} />)}
      {(typeOfItem === 'sweater' && <ItemForm typeOfItem={typeOfItem} />)}
      {(typeOfItem === 'trousers' && <ItemForm typeOfItem={typeOfItem} />)}
      {(typeOfItem === 'shorts' && <ItemForm typeOfItem={typeOfItem} />)}
      {(typeOfItem === 'jacket' && <ItemForm typeOfItem={typeOfItem} />)}
      {(typeOfItem === 'shoes' && <ItemForm typeOfItem={typeOfItem} />)}
      {(typeOfItem === 'accessory' && <ItemForm typeOfItem={typeOfItem} />)}
    </div>
  );
}

export default AddItem;

/* 'shirt', 'tShirt', 'sweater', 'trouser', 'shorts', 'jacket', 'accessory'/'accessories'  */