import { useState } from 'react';


const AjoutRemoveList = () => {



   //state (etat , donnees)
     const [state, setstate] = useState([
       { id: 1, name: "Abricot" },
       { id: 2, name: "Banane" },
       { id: 3, name: "Chien" }
     ]);
   
     const [Newstate, setNewstate] = useState("");
   
    // const InputRef = useRef()
   
     //comportements
   
     
     const remove = (id) => {
      console.log(id);
   
       //1. copie du state
       
       const stateCopy = state.slice(); 
   
       //2. modifier le state
   
      const stateupdate = stateCopy.filter (fruit => fruit.id !== id);
   
       //3. mise à jour du state
       setstate(stateupdate);
     }
   
   
   
   
   
   
   
     //soumettre un formulaire 
     const ajouter = (event) => {
       event.preventDefault();
      //  console.log(InputRef.current.value);
       setstate ([...state, { id: state.length + 1, name: Newstate }]);
       
      //1 . copie du state
   
      // const stateCopy2 = [...state];
      //2 manipulation sur la copie state
   
      //const id = new Date().getTime();
      //const nom = Newstate;
       //stateCopy2.push({id ,nom});
   
      //3 modification du state
        //setstate(stateCopy2)
        setNewstate("");
     }
   
   
   
   
   
     const changement = (e) =>{
       //const valueAfterChange =e.target.value
     
       //setNewstate(valueAfterChange) ou
   
       setNewstate (e.target.value)
         
     }
   
   
   
   
      
   
   
   
   
     //affichage(render ou return)
   
     return (
       <>
         <h1>liste de fruit</h1>
         
           <h1>liste</h1>
   
   
   
           <ul style={{listStyle:'none'}}>
             {state.map( (state) => 
              <li key={state.id}>{state.name} <button onClick={() =>remove(state.id)}>Supprimer</button></li>
             )}
           
           </ul>
   
   
   
   
           <form action="submit" onSubmit={ajouter} >
   
             <input  value={Newstate} type="text" placeholder='ajouter quelque chose' style={{background:'white', color:'black'}}  onChange={changement}/>
             <button>Ajouter</button>
           </form>
   
         
       </>
     )
}

export default AjoutRemoveList;


//gestion du formulaire
//1. creation du formulaire
//2. soumission du formulaire 
//3. collecte des donnes du formulaire
  //eviter d'acceder au element par le dom (document.queryselector...) 


  //methode2 : sync ascendante /descandante