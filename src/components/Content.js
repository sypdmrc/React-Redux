import ContentBody from "./ContentBody";
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react";
import {store} from '../store/multipleReducers'
import { incrementNumber,decrementNumber } from "../store/actions/countActions";

const Content = (props) => {

    const countState = useSelector((state => state.count))
    const dispatch = useDispatch()
    console.log(countState.count)

    useEffect(() => {
        const state=store.getState()
        console.log("state", state)
    }, [store.getState()])

    useEffect(() => {
        store.subscribe(()=>{
            console.log("Değişti")
        })
    }, [])

    return (
        <div style={{ border: "1px solid white" }}>
            <p>Ben header içerisinde bir contentim</p>
            <p>Merhaba {props.userName}</p>

            <p>
            <button onClick={()=>{
               store.dispatch(incrementNumber(1))
            }}>store.dispatch test butonu(1 arttırma)</button>
            </p>

            <button onClick={() => {
               dispatch(decrementNumber(10))
            }}>Sayıyı 10 Azalt</button>
            Sayı:{countState.count}

            <ContentBody onClick={props.onClick} userName={props.userName} />

        </div>

    )
}

export default Content;