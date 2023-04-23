import {listRestrauntCards} from '../utils/mockData';
import FoodCard from './FoodCard';
import { useState } from 'react';

const Body = () => {

    const [skey, setSkey] = useState('');
    const [restrauntCards, setRestrauntCards] = useState(listRestrauntCards)
    const handleSearch = (e) => {
        setSkey(e.target.value);
        const newResult = restrauntCards.filter((item)=>{
            console.log(item.data.avgRating,'==',skey);
            return item.data.avgRating > 4
        })
        setRestrauntCards(newResult);
    }

    return (
        <>
            <section id="foodlist-container">
                <div className='container'>
                    <div className='row-title'>
                        <h2>Our Restaurant</h2>
                        <label>Search
                        <input
                        id="searchKey" 
                        type='text' 
                        name="searchKey"
                        placeholder='Enter Search'
                        value={skey}
                        onChange={handleSearch}
                         /></label>
                    </div>
                    <div className='food-list-wrapper'>
                    {restrauntCards.map((item)=><FoodCard key={item.data.id} foodObj={item.data}/>)}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Body;