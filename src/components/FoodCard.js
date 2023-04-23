import { IMG_CONFIG_URL } from '../utils/constant';

const FoodCard = (props) => {
    const {name, cuisines, cloudinaryImageId, avgRating, costForTwo } = props.foodObj;
    return (
        <>
            <div className='food-item'>
                <img src={IMG_CONFIG_URL+cloudinaryImageId} alt=""/>
                <h3>{name}</h3>
                <p>{cuisines.join(',')}</p>
                <div className='item-info'>
                    <span className='rate'>
                        <i className='fa fa-star'></i>{avgRating}
                    </span>
                    <span className='price'>₹{costForTwo/100} For Two</span>
                </div>
            </div>
        </>
    )
}

export default FoodCard