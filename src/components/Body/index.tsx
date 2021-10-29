import { Card } from "../Card";
import { Container } from "./styled";

export function Body (){
    return(
        <>
        <Container>
            <Card 
                color="red"
                title="Título do Card"
                sub="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl."
            />
            <Card 
                color="#63ECFF"
                title="Título do Card"
                sub="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl."
            />
            <Card 
                color="#F363FF"
                title="Títwulo do Card"
                sub="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl."
            />
        </Container>
        <Container>
        <Card 
                color="#63FF73"
                title="Títwulo do Card"
                sub="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl."
            />
            <Card 
                color="#FFDD63"
                title="Títwulo do Card"
                sub="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl."
            />
            <Card 
                color="#6663FF"
                title="Títwulo do Card"
                sub="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl."
            />
        </Container>
   </>
    )
}