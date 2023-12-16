const BurritosContainer =()=>{

    return(<>
        <div className="section is-justify-content-center	">

<figcaption className="columns is-mobile is-centered mt-6" style={{ textAlign: "center", background: "lightyellow" }}>
    <div className="card-content">
        <MenuPage
        menuImage={"./images/dipsNachosLaCarta.jpg"}
        />
        
    <Link  to="/orden">
<button className="button is-small">Back</button>

</Link>
        <p><strong> Nachos:  </strong>Chicken, Beaf, Bean, Chicken And Bean, Chicken And Beef</p>     
        <p><strong>Nachos Supreme: </strong>Served with beans lettuce, soure cream, tomatoes, and guacamole.</p>    
         <p><strong>Nachos Fajita: </strong> Steak, Grilled Chicken, Shrimp, Mix or Tejano. Cooked with bell peppers, onions, and tomatoes.</p>
      <p><strong> * add Supreme 2. 50  </strong> </p> 
         <p> <strong>*add Pineapple 2.00 </strong></p> 
<button className="button is-success is-small" onClick={(event)=>{addNachos(event)}} > Add Nachos</button>
      </div>

</figcaption>


    
</div>



{
    nachosFields.map((nachitos,index) => {

        return (<div key={index} className="container">


< NachosDropDown
selectNachoName={"nachos"}
numeros={numeros}
handlePineapplefunc = {(e)=>handlePinapplefunc(index,e)}
handleSupremeNachos={(e)=>nachosSupremeHandler(index,e)}
onChangeNachos= {e=>handleNachosChange(index,e)}
removeNachos= {()=>removeNachos(index)}
/>

  </div>)



    })
}
    
    
    
    </>)
}


export default BurritosContainer