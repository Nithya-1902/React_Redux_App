import { buyCake } from './redux/CakeAction';
import { connect } from 'react-redux';

function CakeContainer(props) {
    return (
        <div>
            <button onClick={props.buyCake}>Buy Cakes</button>
            <h1>Number of Cakes : {props.numOfCakes}</h1>
        </div>
    );
}

const mapStateToProps = state => {
    return{
        numOfCakes : state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => { dispatch(buyCake()) }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer);