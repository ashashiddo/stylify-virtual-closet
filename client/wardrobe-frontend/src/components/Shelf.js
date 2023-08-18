import DeleteButton from "./DeleteButton"
import EditButton from './EditButton'
import styles from '../css/Shelf.module.css'

const Shelf = ({itemList, canBeDeleted = true, canBeEdited = true}) => {
  return (
    <div className={styles.shelf}>
      {itemList.map( item => (
        <div className={styles.wardrobeItem} key={item.id}>
          <div className={styles.itemContent}>
            <p className={styles.itemDesc}>{item.description}</p>
            <p className={styles.itemDetails}><span>{item.color}</span><span>{item.brand}</span></p>
            <p ><img className={styles.itemImg} src={item.url}></img></p>
          </div>
          <div className={styles.itemButtons}>
            <div className={styles.editButton}>
            { canBeEdited && <EditButton item={item} />}
            </div>
            <div className={styles.deleteButton}>
            { canBeDeleted && <DeleteButton id={item.id} />}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Shelf;