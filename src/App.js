import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';
import SearchForm from './SearchForm';
import {useState} from 'react';

function App() {
  const[items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')));

  const [newItem, setNewItem] = useState('')
  const [newSearch, setNewSearch] = useState('')

  const handleSubmit = (e) =>
  {
    e.preventDefault();
    if(!newItem) return;
    addItem(newItem); 
  }

  const addItem = (item) => 
  {
     const id = items!=null ?  items[items.length-1].Id+1  : 0;
     const myNewItem = { Id: id, Checked:false, Name:item  }
     const allItems = items!=null ?  [...items, myNewItem] : [myNewItem];
     setAndSaveItem(allItems);
  }

  const setAndSaveItem = (listItems) => 
  {
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }
  const handleChange =(id) =>
  {
    const listItems = items.map(item=> item.Id === id ? {...item, Checked: !item.Checked}: item)
    setAndSaveItem(listItems);
  }
  const handleDelete =(id) =>
  {
    const listItems = items.filter(item => item.Id !== id )
    setAndSaveItem(listItems);
  }
  

  return (
    <div className="App">
        <Header title= "Groceries List"></Header>
        <AddItem 
        newItem={newItem} 
        setNewItem={setNewItem} 
        handleSubmit={handleSubmit} />
        <SearchForm 
        newSearch={newSearch} 
        setNewSearch= {setNewSearch}  />
        <Content items={ items == null?[]: items.filter(i => (i.Name.toLocaleLowerCase()).includes(newSearch.toLocaleLowerCase()))
        }
         handleChange={handleChange} 
         handleDelete={handleDelete} />
        <Footer length={items == null ? 0 : items.length}></Footer>
    </div>
  );
}

export default App;
