const heading = React.createElement('div',{
id : "parent",
},React.createElement('div',
    {id : "child"},
    [React.createElement('h1',{},"Hi am H1"),
    React.createElement('h1',{},"Hi am H2")]),
    [React.createElement('div',
    {id : "child-2"},
    [React.createElement('h1',{},"Hi am H1"),
    React.createElement('h1',{},"Hi am H2")])]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);