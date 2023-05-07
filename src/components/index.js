import { Routes, Route, useParams } from 'react-router-dom';

function index(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let { id } = useParams();

    return(
<div>Home{id}</div>
    )
}
export default index;