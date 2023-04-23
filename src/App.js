import React from 'react';
import ReactDOM from 'react-dom/client';
import '../style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';

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

//const heading = (<h1>Hi I am Sanjay</h1>); //React Eelement
//const SubTitleComponent = () => <h2>I am web debloper</h2> //Fun component


const AppLayout = () => (
    <>
        <Header/>
        <Body/>
        <Footer/>
    </>
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);
