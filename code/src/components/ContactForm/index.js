import PropTypes from 'prop-types';

import {Form, ButtonContainer} from './styles';
import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

export default function ContactForm({buttonLabel}) {
    return (
        <Form>
            <FormGroup>
                <Input placeholder="Nome"></Input>
            </FormGroup>
            <FormGroup>
                <Input placeholder="E-Mail"></Input>
            </FormGroup>
            <FormGroup>
                <Input placeholder="Telefone"></Input>
            </FormGroup>
            <FormGroup>
                <Select>
                    <option value="instagram">Instragram</option>
                </Select>
            </FormGroup>
            <ButtonContainer>
                <Button type="submit">{buttonLabel}</Button>
            </ButtonContainer>
        </Form>
    );
}

ContactForm.propTypes ={
    buttonLabel: PropTypes.string.isRequired,
}
