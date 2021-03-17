import React, { useContext, useState } from 'react'
import AppContext from '../Contextes/AppContext';


const CreatePokemon = () => {


    const [pokemonName, setPokemonName] = useState("")
    const [pokemonNumber, setPokemonNumber] = useState(undefined)
    const { db } = useContext(AppContext)

    const handleSubmit = e => {
        //Insertion des données dans la base de données
        console.log("called")
        db.insert("pokemons", { number: pokemonNumber, name: pokemonName });
        db.commit();
        e.preventDefault();
    }

    return (
        <div>
            <h1>
                Create your Pokemon {pokemonName}
            </h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Number
                        <input type='text' onChange={e => setPokemonNumber(e.target.value)}>
                        </input>
                    </label>
                </div>
                <div>
                    <label>
                        Name
                        <input type='text' onChange={e => setPokemonName(e.target.value)}>
                        </input>
                    </label>
                </div>

                <button type="submit">
                    Create
                </button>
            </form>



            {/* <BrowserRouter>
                <Switch>
                <Link to='/ListPokemon'>
                </Link>
                </Switch>
            </BrowserRouter>  */}

        </div>
    )
};

export default CreatePokemon