import { buyIceCream } from './redux/IceCreamAction';
import {connect} from 'react-redux';

function IceCreamContainer(props) {
    return (
        <div>
            <button onClick = {props.buyIceCream}>Buy Ice Cream</button>
            <h1>Number of IceCreams - { props.numOfIceCreams}</h1>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => { dispatch(buyIceCream()) }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer);