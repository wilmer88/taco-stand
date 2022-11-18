const OrdenHero = () => {
  return (
    <>
      <section  className="hero mr-3 ml-3">
        <div   className="hero-body">
          <div id="ordenPageHero"  className="container">
            <div id="heroTS" className="subtitle has-text-left">
              Porfavor Ordene
            </div>
  
            <div id="heroG" className="subtitle has-text-centered">
              Tacos: 3.00
              <br></br>
              Grande/Large Horchata: 4.00
              <br></br>
              Pequeña/Small Horchata: 2.00

              <br></br>
              Sodas: 2.00
              
            </div>
            <div id="heroTE" className="subtitle has-text-right">
              Please Order
            </div>

            {/* <picture> <source srcset="/images/tacos.png" media="(min-width: 1240px)"> </source></picture>  */}
          </div>
        </div>
      </section>
    </>
  );
};

export default OrdenHero;
