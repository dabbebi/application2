import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';
import { accountActions } from './Store/Actions';

function App() {

  const account = useSelector((state) => state.account);

  const dispatch = useDispatch();

  const {depositMoney, withdrawMoney} = bindActionCreators(accountActions, dispatch);
  return (
    <>
    <br />
    <br />
    <br />
      <div className='cont' style={{marginLeft : "auto", marginRight : "auto", textAlign : "center"}}>
        {"Solde = " + account + " $"}
      </div>
      <div style={{display : "flex", flexDirection : "row", textAlign : "center"}}>
      <div style={{marginLeft : "auto", marginRight : "auto"}}>
        <button className='butt' onClick={() => depositMoney(100)}>Ajouter 100 $</button>
      </div>
      <div style={{marginLeft : "auto", marginRight : "auto"}}>
      <button className='butt' onClick={() => withdrawMoney(100)}>Retirer 100 $</button>
      </div>
    </div>
    </>
  );
}

export default App;
