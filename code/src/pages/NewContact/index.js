import Button from "../../components/Button";
import Input from "../../components/Input";
import PageHeader from "../../components/PageHeader";
import Select from "../../components/Select";

export default function NewContact(){
    return (
        <>
        <PageHeader
            title="Novo Contato"
        />
        <Input type="text" placeholder="Nome"></Input>
        <Select >
            <option value="123">Instagram</option>
        </Select>
        <Button type="Button" disabled>Salvar Alterações</Button>
        </>
    );
}
