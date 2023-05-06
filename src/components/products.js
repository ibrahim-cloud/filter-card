import React , { useState ,useMemo,useEffect }  from 'react';
import Data from '../Data.json';
import SingleProduct from './singleProduct';
function Products() {
    const [selectedCategorie, setSelectedCategorie] = useState();
    const [Products, setProducts] = useState([]);
    useEffect(() => {
        setProducts(Data);
      }, []);
      var filteredList = useMemo(getFilteredList, [selectedCategorie, Products]);
  function getFilteredList() {
    if (!selectedCategorie) {
      return Products;
    }
    return Products.filter((item) => item.categorie === selectedCategorie);
  }

    function handleCategoryChange(event) {
        setSelectedCategorie(event.target.value);
     }

return(
    <div>
        <div>
   <div>Filter with categorie:</div>
   <div>
      <select
        onChange={handleCategoryChange}
      >
         <option value="">All</option>
         <option value="A">a</option>
         <option value="B">B</option>
         <option value="C">C</option>
      </select>
   </div>
</div>

{filteredList.map((element, index) => (
          <SingleProduct {...element} key={index} />
        ))}

    </div>
    )
}
export default Products;

