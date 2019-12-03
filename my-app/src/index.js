import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function canvas(props)
{
    return(
        <canvas id = "cvn" className = "board" width = "480" height = "320">
        
            {props.value}
        </canvas>
        )
}

class Board extends React.Component
{
    constructor(props)
    {
    super(props);
    
        this.state = {
            gameCanvas: canvas(),
            
        
        }
     }
     render()
     {
        var canvas = document.getElementById("cvn");
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "#FF0000";
        return
     }
}
class Game extends React.Component{

constructor(props){
    super(props);

}
render()
{
    return(
    <Board/>
    );
    }
}
ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  