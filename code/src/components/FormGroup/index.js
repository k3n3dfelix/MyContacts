import PropTypes from 'prop-types';

import  {Container} from './styles';
import Input from '../Input';

export default function FormGroup({children, error}){
    return (
        <Container>
            {children}
            {error && <small>{error}</small>}
        </Container>
    );
}

FormGroup.propTypes = {
    children: PropTypes.node.isRequired,
    error: PropTypes.string,

}

FormGroup.defaultProps = {
    error:null,
}
