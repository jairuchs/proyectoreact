import { BsFillCartFill} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import  { useCartContext } from '../context/CartContext';

const CartWidget = () => {

    const {cantidadTotal} = useCartContext()

    return (
        <Link to="/cart" className='cart'>
              < BsFillCartFill/>
              <span>{cantidadTotal()} </span>
        </Link>
    )
}

export default CartWidget