import PropTypes from "prop-types"; 
import css from "./FeedbackOptions.module.css"
const FeedbackOptions = ({options}) => {
    return (<div className={css.buttonClick}><button type="button" onClick={options} name="good">Good</button>
    <button type="button" onClick={options} name="neutral">Neutral</button>
    <button type="button" onClick={options} name="bad">Bad</button> </div>)
}
FeedbackOptions.propTypes = {
options:PropTypes.func.isRequired,
}

export default FeedbackOptions;
