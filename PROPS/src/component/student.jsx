import PropTypes from "prop-types"
function Student(props){
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>studies: {props.studies}</p>

        </div>
    )
// }
//  Student.PropTypes={
//     name:PropTypes.string,
//     age:PropTypes.number,
//     studies:PropTypes.string,
//  }





export default Student