import React from 'react';
import {useSelector, useDispatch} from 'react-redux'

import {buyCake} from '../redux'
import { from } from 'rxjs';
const HooksCakeContainer = () => {
    const numOfCake=useSelector(state => state.numOfCake)
    const dispatch=useDispatch()
    return (
        <div>
            <h2>num of cake {numOfCake}</h2>
            <button onClick={()=>dispatch(buyCake())}>buy cake </button>
        </div>
    );
}

export default HooksCakeContainer;
