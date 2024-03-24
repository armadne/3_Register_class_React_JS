import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const App = () => {

    const[Candidate, ListCandidate] = useState([]);

    const[inputFirst, setinputFirst] = useState('');
    const[inputSecond, setinputSecond] = useState('');
    const[inputThird, setinputThird] = useState('');



    const addCandidate = () => {

        if(inputFirst.trim() !== '') { 

            ListCandidate([...Candidate, inputFirst, inputSecond, inputThird]);
            setinputFirst('');
            setinputSecond('');
            setinputThird('');
        };
    };


    const removeCandidate = (index) => {

        const New_Copy_ListCandidate = [...Candidate];
        New_Copy_ListCandidate.splice(index, 1);
        ListCandidate(New_Copy_ListCandidate);
    };

    return(

        <div>
            <h1>Register To Computer Science Class</h1> <br/><br/>

            <label htmlFor="first_name">First Name : </label>
            <input
            type='text'
            name='first_name'
            value={inputFirst}
            onChange={(e) => setinputFirst(e.target.value)}
            placeholder='Enter Your FirstName'
            />

            <br/><br/>

            <label htmlFor="last_name">Last Name : </label>
            <input
            type='text'
            name='last_name'
            value={inputSecond}
            onChange={(e) => setinputSecond(e.target.value)}
            placeholder='Enter Your LastName'
            />

            <br/><br/>


            <label htmlFor="email">Email : </label>
            <input
            type='text'
            name='email'
            placeholder='Enter Your Email'
            value={inputThird}
            onChange={(e) => setinputThird(e.target.value)}
            />

            <br/><br/>




            <button onClick={addCandidate}>Register</button>

            <ul>
                {Candidate.map((Candidate, index) => (

                    <li key={index}>

                        {Candidate} <br/>

                        <button onClick={() => removeCandidate(index)}>Supprimer</button><br/><br/><br/><br/>

                        {index % 3 === 2 && index !== Candidate.length - 1 && <hr />} {/*Explication :
index % 3 === 2: Cela vérifie si l'index de l'élément actuel est un multiple de 3 moins un (donc si l'index est 2, 5, 8, etc.). Cela garantit que la séparation apparaîtra après chaque troisième élément.
index !== Candidate.length - 1: Cela garantit que la séparation n'est pas ajoutée après le dernier élément de la liste.
Ainsi, cette ligne de code ajoutera une séparation après chaque troisième élément de la liste, à l'exception du dernier élément. */}
                    </li> 
                    
                    

                ))}
            </ul>

        </div>
    );


};


ReactDOM.render(

    <React.StrictMode>
        <App />
    </React.StrictMode>,

    document.getElementById('root')
);
