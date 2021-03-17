import React from 'react' 
// import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import CreatePokemon from './CreatePokemon'

const ListPokemon =()=>{
    return(
        
       <div>
           
           <header>
                <h1>List of the Pokemon</h1>
                <button>Create</button>
                {/* <BrowserRouter>
                    <Switch>
                        <Route path="/CreatePokemon">
                            <CreatePokemon></CreatePokemon>

                        </Route>
                    </Switch>
                </BrowserRouter>  */}
           </header>
       </div>

    )
};

export default ListPokemon;