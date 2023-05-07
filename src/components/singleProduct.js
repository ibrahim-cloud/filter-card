


  import { Routes, Route, useParams } from 'react-router-dom';

function singleProduct({ id ,title, categorie }){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let { productId } = useParams();

    return(
<div>

<div>
  <div>Id: {productId}</div>
  <div>Title: {title}</div>
  <div>Category: {categorie}</div>

</div>
</div>    )
}
export default singleProduct;