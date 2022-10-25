import {connect} from 'react-redux'
import {Increment,Decrement,Reset} from '../store/actions/countActions'

 const Count = (props) => { 
    console.log(props.count)
    const count = props.count
    return ( 
        <>
          <h1>react redux</h1>
          <h3>count -- {count} </h3>
          <p className='mt-5'></p>
          <button className='bg-indigo-500 text-white py-1 px-2 font-bold mx-2'
          onClick = { () => props.addToCount()}
          >+</button>
          <button className='bg-red-500 text-white py-1 px-2 font-bold mx-2'
            onClick = { () => props.subFromCount()}
            >-</button>
          <button className='bg-green-500 text-white py-1 px-2 font-bold'
            onClick = { () => props.resetBack()}
          
          >reset</button>
        </>
    )
}

const mapStateToProps = (state) => { 
    return { 
        count : state.count
    }
}
const mapDispatchToProps = (dispatch) => { 
    return { 
        addToCount : () => dispatch(Increment()),
        subFromCount : () => dispatch(Decrement()),
        resetBack : () => dispatch(Reset())
    }
}

export default connect (mapStateToProps,mapDispatchToProps) (Count)