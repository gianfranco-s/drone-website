class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

        <header>
            <div class="wrapper">
                <div class="logo">
                    Drones Chancho Carancho: un punto de vista diferente
                </div>
            
                <nav>
                    <a href = "index.html">                 Inicio</a> 
                    <a href = "construccion_drones.html">   Construcción </a> 
                    <a href = "agricultura_drones.html">    Agricultura </a> 
                    <a href = "publicidad_drones.html">     Publicidad </a> 
                    <a href = "contacto_drones.html">       Contacto </a> 
                </nav>
            </div>
        </header>



      `;
    }
  }
  
  customElements.define('header-component', Header);