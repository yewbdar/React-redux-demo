import React, { Component,useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {deleteCake,createCake,buyCake } from '../redux'
export default function Cake(){
        const [cake , setCake]= useState({name:'hello',numOfCake:0,type:'hiiii'})
         const dispatch = useDispatch()
        const cakes = useSelector(state => state.cakes)
        
       const onChange = (e) => {
              setCake({...cake,[e.target.name]:e.target.value})
        }
       const onSubmitClick = (e) => {
           e.preventDefault()
           console.log(cake)
            dispatch(createCake(cake))
        }
        const removeCake = (e)=>{
           console.log(e.target.value)
           dispatch(deleteCake(e.target.value))

        }
        const buyCakes=(e)=>{
            dispatch(buyCake(e.target.value))
        }
        return (
            <div>
                <form>
                    <div>
                        <lable>cake name</lable>
                        <input type='text' name='name'  onChange={onChange}/>
                    </div>
                   
                    <div>
                        <lable>cake type</lable>
                        <input type='text' name='type'  onChange={onChange}/>
                    </div>
                    <div>
                        <lable>Number of cake</lable>
                        <input type='text' name='numOfCake'  onChange={onChange}/>
                    </div>
                    <div>
                        <button type='submit' onClick={onSubmitClick}>submit</button>
                    </div>
                </form>
               <ul>
                   {/* {this.state.cakes.map(itme=>(
                       <li>{itme.id},{itme.name},{itme.numOfCake}</li>
                   ))} */}
                   {console.log('cakes.....', cakes)}
                   {cakes.map(itme=>(
                       <li key={itme.id}> 
                         id = {itme.id}
                          cake name = {itme.name},num of cake{itme.numOfCake} 
                          <button onClick={buyCakes} value={itme.id}
                          >BUY CAKE</button>
                          <button onClick={removeCake} value={itme.id}
                          >X</button>
                       </li>
                   ))}
               </ul>
            </div>
        )
    
}
