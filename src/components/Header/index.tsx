import { BoxImg, ContainerHeader, ContentHeader, MyButton, MyH1, MyImg, MyP } from "./styles";

export function Header(){
    return(
        <ContainerHeader>
            <ContentHeader>
                <MyH1>Lorem ipsum dolor <br/> sit amet</MyH1>
                <MyP>Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit. Maecenas eu massa sit amet<br/> augue consectetur ullamcorper non ac massa.</MyP>
                <MyButton>Botão</MyButton>
                
            </ContentHeader>
            <BoxImg>
                    <MyImg
                        className="img"
                        src="/../public/image.svg"
                        alt="gift"
                        width="500"
                        height="359,75"
                        
                       
                        
                    />
                </BoxImg>
        </ContainerHeader>
    )
}