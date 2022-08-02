import { useSelector, useDispatch } from 'react-redux'
import { incrementNumber } from '../store/actions/countActions'


const ContentBody = (props) => {

    const userState = useSelector((state => state.userName))
    const countState=useSelector((state => state.count))
    const dispatch = useDispatch()

    return (

        <div style={{border:"1px solid white"}}>

            <h1 onClick={props.onClick}>
                Content Body Componentim ben {userState.userName}<br />
                Store'dan useSelector ile gelen bir sayıyım
                Sayı:{countState.count}
            </h1>

            
            <button onClick={() => {
                dispatch(incrementNumber(5))
            }}>Sayıyı 5 Arttır</button>

          
        </div>
    )
}

export default ContentBody;