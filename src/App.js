import './App.css';
import Encabezado from './componentes/compartidos/Encabezado';
import Principal from './componentes/compartidos/Principal';
import Pie from './componentes/compartidos/Pie';

function App() {
  return (
    <div className="App">
      <Encabezado></Encabezado>
      <Principal></Principal>
      <Pie></Pie>
    </div>
  );
}

export default App;
