var cards = ['','','','','','','']

function Menu() { 
    return(
        <div>
            {
                cards.map((item, index) => (
                    <h2 key={index}>Olá mundo</h2>
                ))
            }
        </div>
    );
}

export default Menu;