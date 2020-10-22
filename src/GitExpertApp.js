import React, {useState} from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GitExpertApp = () => {
    //const categories = ['One Punch', 'Goku', 'One piece'];
    const [categories, setCategories] = useState(['One piece']);

    const addCategory = (value) => (setCategories([value, ...categories]));

    return (
        <>
            <h2>Git Expert App</h2>
            <AddCategory addCategory={addCategory} />
            <hr />
            {categories.map(res => (<GifGrid name={res} key={res} />))}
        </>
    );
}
 
export default GitExpertApp;