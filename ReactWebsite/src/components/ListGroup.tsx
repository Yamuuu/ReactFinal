import { Fragment, useState } from "react";
import brieimg from '../assets/images/brie.png';
import chedimg from '../assets/images/cheeddar.png';
import goudimg from '../assets/images/Gouda.png';
import havaimg from '../assets/images/Havarti.png';
import mozzaimg from '../assets/images/Mozzarella.png';
import redleiimg from '../assets/images/Red Leicester.png';

function ListGroup() {
    const items = [
        { name: 'Beaver Brie', description: 'A soft and creamy cheese with a white rind.', origin: 'France', price: '$14.93/ 1lb', image: brieimg},
        { name: 'Chinchilla Cheddar', description: 'A firm and sharp cheese, often aged to bring out its tangy flavor.', origin: 'England', price: '$14.93/ 1lb', image: chedimg},
        { name: 'Guinea Pig Gouda', description: 'A rich, creamy cheese with a slightly sweet and nutty flavor.', origin: 'Netherlands', price: '$14.93/ 1lb', image: goudimg },
        { name: 'Hamster Havarti', description: 'A semi-soft cheese, creamy and buttery with a mild flavor.', origin: 'Denmark', price: '$14.93/ 1lb', image: havaimg  },
        { name: 'Mouse Mozzarella', description: 'A soft, mild cheese, with a creamy texture and delicate taste.', origin: 'Italy', price: '$14.93/ 1lb', image: mozzaimg },
        { name: 'Rat Red Leicester', description: 'A firm, tangy cheese with a rich orange color, a nutty and slightly sweet flavor.', origin: 'England', price: '$14.93/ 1lb', image: redleiimg  }
    ];

    const [selectedIndex, setSelectedIndex ] = useState(-1);

    return ( 
        <Fragment>
            <h3>Our Cheeses</h3>
             {items.length === 0 && <p>No item found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                    className={
                        selectedIndex === index 
                        ? "list-group-active" 
                        : "list-group-item"
                    }
                    key={item.name}
                    onClick={() => {setSelectedIndex(index); }}
                    >
                        {item.name}
                    </li>
                ))}
            </ul>

                {selectedIndex !== -1 && (
                    <div className="cheese-info"> 
                    <div className="ListGroupLeft">     
                    <img src={items[selectedIndex].image} alt={items[selectedIndex].name} className="cheese-image" />
                    </div>

                    <div className="ListGroupRight">
                    <h3>{items[selectedIndex].name}</h3>
                        <h5>Origin: {items[selectedIndex].origin}</h5>
                        <h6>{items[selectedIndex].price}</h6>
                        <p>{items[selectedIndex].description}</p>
                        <button className="buy">Add To Cart</button>
                    </div>
                    
                    </div>
                )}

        </Fragment>
    );
}

export default ListGroup;