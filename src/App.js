import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import { useDispatch } from 'react-redux'
import { fetchData, setUserName } from './store/actions/userActions';

function App() {

  const [userName, _setUserName] = useState("Şuayip")
  const dispatch = useDispatch()

  // const count=useSelector((state=>state.count))

  return (
    <div className="App">
      <header className="App-header">

      <button onClick={()=>{
        dispatch(fetchData())
      }}>Tıkla ve asenkron işlem ile redux'ı kullan</button>


        <button onClick={() => {
          dispatch(setUserName("Şuayip Demirci"));
        }}>İsim Değiştir</button>
        {/* <p style={{border:"1px solid white"}}>Sayı:{count}</p> */}
        <Header onClick={() => {
          alert("Ben taa app.js'den geldim")
        }} userName={userName} />
      </header>
    </div>
  );
}

export default App;
