
import { ButtonContact, ContainerContact, FormContact, InputMsg, MyH1, MyInput } from "./styled";

export function Contact(){
    return(
        <>
        <ContainerContact>
            <MyH1>Entre em contato</MyH1>
            <FormContact>
                <MyInput placeholder="Nome"/>
                <MyInput placeholder="E-mail"/>
                <MyInput placeholder="Telefone" />
                <InputMsg placeholder="Mensagem..."/>
                <ButtonContact>Enviar Mensagem</ButtonContact>
            </FormContact>
        </ContainerContact>
        </>
    )
}