import React, { Component } from 'react';


function Moves(props){
    function jumpTo(move){
           console.log('clicked')
    }
    let history=props.history;
    history.map(() =>{
        // const desc = move ?
        // 'Go to move #' + move :
        // 'Go to game start';
        return (
            <li>
              <button onClick={() => jumpTo}>button1</button>
            </li>
          );

    })
    
    }
    export default Moves;