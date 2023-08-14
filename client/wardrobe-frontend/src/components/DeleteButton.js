import { useContext } from 'react'
import { ClothesContext } from '../contexts/ClothesContext'

const DeleteButton = ({ id }) => {
  const { dispatch } = useContext(ClothesContext);

  return (
    <div className="item-buttons delete-button">
      <button onClick={() => dispatch( {type: 'REMOVE_ITEM', id: id} )}>X</button>
    </div>
  );
}

export default DeleteButton;