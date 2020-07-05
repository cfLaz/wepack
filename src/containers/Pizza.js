import React, {component} from 'react';
import PizzaImg from  '../components/PizzaImage/PizzaImg';

class Pizza extends Component {
    render() {
        return (
            <div>
                <h1>The Pizza</h1>      
                <PizzaImg/>      
            </div>
        );
    }
}
export default Pizza;