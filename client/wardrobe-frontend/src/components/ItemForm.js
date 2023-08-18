import { useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useHistory } from 'react-router-dom'
import { ClothesContext } from '../contexts/ClothesContext'
import styles from '../css/ItemForm.module.css'

const ItemForm = ({ typeOfItem }) => {
  const { dispatch } = useContext(ClothesContext);
  const [description, setDescription] = useState('');
  const [color, setColor] = useState('');
  const [brand, setBrand] = useState('');
  const [url, setURL] = useState('');
  const [feedback, setFeedback] = useState(null);

  const history = useHistory();

  const handleDescChange = e => {
    setDescription(e.target.value);
  }
  const handleColorChange = e => {
    setColor(e.target.value);
  }
  const handleBrandChange = e => {
    setBrand(e.target.value);
  }
  const handleURLChange = e => {
    setURL(e.target.value);
  }
  const handleSubmit = e => {
    e.preventDefault();

    if(description === '' || color === '' || brand === '' || url === ""){
      setFeedback('You must fill in all the fields!')
      setTimeout(() => {
        setFeedback(null);
      }, 3000)
    } else {
      const newItem = {
        type: typeOfItem,
        description,
        color,
        brand,
        url,
        id: uuidv4()
      }
      dispatch({type: 'ADD_ITEM', newItem});
      history.push('/logged_in');
    }
  }

  return (
    <div >
      <form onSubmit={handleSubmit}>
        <div >
          <label>What kind of {typeOfItem} is it?</label>
          <br />
          <a className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          <input name="desc" type="text" placeholder={`Description...`} onChange={handleDescChange} required />
          </a>
          
        </div>
        <div>
          <label>Color of the {typeOfItem}</label>
          <br />
          <a className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'><input name="color" type="text" placeholder="Color..." onChange={handleColorChange} required /></a>
        </div>
        <div>
          <label>Brand</label>
          <br />
          <a className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'><input name="color" type="text" placeholder="Brand..." onChange={handleBrandChange} required /></a>
        </div>
        <div>
          <label> Upload Image</label>
          <br />
          <a className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'><input name="upload" type="text" placeholder="image url..." onChange={handleURLChange} required /></a>
        </div>
        <button class="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type="submit">Add the item</button>
      </form>
      <div>
        {feedback && <p className="feedback">feedback</p>}
      </div>
    </div>
  );
}

export default ItemForm;