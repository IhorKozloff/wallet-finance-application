import { Outlet } from "react-router-dom";
import { Section, Container, Header, LayoutComponentsBar } from "components";
import Media from "react-media";



export const Layout = () => {
    
    return (
        <>
            <Section className="section header-section">
                <Container className="container header-container">
                    <Header/>
                </Container>
            </Section>
            
            <main className="main"> 
                <Media query="(max-width: 1279px)" render={() =>
                    (
                        <>
                            <Section className="section layout-section">
                                <Container className="container layout-container">   
                                    <LayoutComponentsBar/>
                                </Container>
                            </Section>

                            <Outlet/>
                        </>
                    )}
                />


                <Media query="(min-width: 1280px)" render={() =>
                    (
                        <Section className="section">
                            <Container className="container" style={{display: "flex"}}>   
                                <LayoutComponentsBar/>
                                <Outlet/>
                            </Container>
                        </Section>
                    )}
                />
            </main>
            

            <footer></footer>
        </>
    )
}