 export function MouseClicker(){
    function handleButtonClick(event){
   console.log( event.currentTarget.name)
    }
    return ( <div>
    <button name= 'one' onClick = {handleButtonClick}> 
    <img width={24} height ={24}/>
    Click me!</button>
    <button name= 'two' onClick ={handleButtonClick}> Click me</button>
</div>
)
 }