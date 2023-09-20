import PropTypes from 'prop-types';
import '../Home/home.css'
import { Link } from 'react-router-dom';

const Product = ({product}) => {
      const {title,description,price,thumbnail,id} = product;
      return (
            <div className='shadow-lg flex flex-col'>
                  <img className='h-52 w-full object-cover object-top' src={thumbnail} alt="" />
                  <div className='p-5 flex-1 flex flex-col space-y-2'>
                  <h2 className='text-2xl font-bold'>{title}</h2>
                  <p className='text-gray-500 h-[70px]'>{description}</p>
                  <p className='font-bold justify-end text-[20px]'>${price}</p>
                  <Link to={`/products/${id}`}><button className='bg-white text-sky-500 rounded-lg'>View details</button></Link>
                  </div>
            </div>
      );
};

Product.propTypes = {
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        thumbnail: PropTypes.string.isRequired,
      }).isRequired,
    };
    
export default Product;