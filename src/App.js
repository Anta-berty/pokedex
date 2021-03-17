import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppContextProvider from './Contextes/Providers/AppContextProvider';
import Dashboard from './interface/Dashboard'
import CreatePokemon from './CRUDPokemon/CreatePokemon'

const App=()=>{
  return (
    <AppContextProvider>
      
      <BrowserRouter>
          <Switch>
            <Route path='/add' component={CreatePokemon}></Route>
            <Route path='/' component={Dashboard}></Route>
          </Switch>
      </BrowserRouter>
    

    </AppContextProvider>
  );
}

export default App;
