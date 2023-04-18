import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import bev from './bev.jpg';

// Episode-1 & 2
// const heading = React.createElement('div',{
// id : "parent",
// },React.createElement('div',
//     {id : "child"},
//     [React.createElement('h1',{},"Hi am H1"),
//     React.createElement('h1',{},"Hi am H2")]),
//     [React.createElement('div',
//     {id : "child-2"},
//     [React.createElement('h1',{},"Hi am H1"),
//     React.createElement('h1',{},"Hi am H2")])]);

const heading = (<h1>Hi I am Sanjay</h1>); //React Eelement
const SubTitleComponent = () => <h2>I am web debloper</h2> //Fun component

const Header = ()=>{

    return(
    <>
        <header>
            <div className='header container'>
                <div className='logoname'>
                    <h4>Dev<span>Foody</span></h4>
                </div>
                <nav className='nav-menu'>
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Contact</a></li>
                        <li><a href='#'>Cart<span className='badge'>2</span></a></li>
                    </ul>
                </nav>
            </div>
        </header>
    </>)
}

const Footer = () => {
    return (
        <>
            <footer>
                <div className='container'>
                    <p>© 2023 DFoody</p>
                </div>
            </footer>
        </>
    )
}


const Body = () => {
    return (
        <FoodCard/>
    )
}

const FoodCard = () => {
    return (
        <>
            <section id="foodlist-container">
                <div className='container'>
                    <div className='row-title'>
                        <h2>Food Order</h2>
                    </div>
                    <div className='food-list-wrapper'>
                        <div className='food-item'>
                            <img src={bev} />
                            <h3>La Pino'z Pizza</h3>
                            <p>Pizzas, Italian, Snacks, Desserts, Beverages</p>
                            <div className='item-info'>
                                <span className='rate'>
                                    <i className='fa fa-star'></i>3.9
                                </span>
                                <span className='price'>₹ 50.00</span>
                            </div>
                        </div>
                        <div className='food-item'>
                            <img src={bev} />
                            <h3>Shubh Janta Ice Cream</h3>
                            <p>Ice Cream, Desserts, Beverages</p>
                            <div className='item-info'>
                                <span className='rate'>
                                    <i className='fa fa-star'></i>3.9
                                </span>
                                <span className='price'>₹ 200.00</span>
                            </div>
                        </div>
                        <div className='food-item'>
                            <img src={bev} />
                            <h3>Brown Burger Co.</h3>
                            <p>American, Beverages, Desserts, Pizzas, Snacks, Juices, Ice Cream</p>
                            <div className='item-info'>
                                <span className='rate'>
                                    <i className='fa fa-star'></i>3.9
                                </span>
                                <span className='price'>₹ 300.00</span>
                            </div>
                        </div>
                        <div className='food-item'>
                            <img src={bev} />
                            <h3>Domino's Pizza</h3>
                            <p>Pizzas, Italian, Desserts</p>
                            <div className='item-info'>
                                <span className='rate'>
                                    <i className='fa fa-star'></i>3.9
                                </span>
                                <span className='price'>₹ 400.00</span>
                            </div>
                        </div>
                        <div className='food-item'>
                            <img src={bev} />
                            <h3>La Pino'z Pizza</h3>
                            <p>Pizzas, Italian, Snacks, Desserts, Beverages</p>
                            <div className='item-info'>
                                <span className='rate'>
                                    <i className='fa fa-star'></i>3.9
                                </span>
                                <span className='price'>₹ 50.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const AppLayout = () => (
    <>
        <Header/>
        <Body/>
        <Footer/>
    </>
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);
