import { useState, useEffect } from "react";
import {getGiftsHelper} from '../helpers/getGifts';

const useFetchGifts = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
        getGiftsHelper(category).then(res => {
            setTimeout(() => setState({
                data: [...res],
                loading: false,
            }) , 3000);
        }).catch(err => console.log(err));
    }, [category]);

    return state;
}
 
export default useFetchGifts;