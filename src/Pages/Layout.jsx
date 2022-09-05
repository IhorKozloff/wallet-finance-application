import { Outlet } from "react-router-dom";
import { Section, Container, Header, NavigationBar } from "components";




export const Layout = () => {
    
    return (
        <>
            <Section className="section header-section">
                <Container className="container header-container">
                    <Header/>
                </Container>
            </Section>
     
            

            <nav>
                <Container className="container navigation-container">
                    <NavigationBar/>
                </Container>
            </nav>

            <main className="main">
                    {/* <button type="button" style={{width: 60, height: 60, backgroundColor: "green", }} onClick={async () => {
                       const response = await axios.get("https://eyeshield-wallet-server-app.herokuapp.com/transactions/all");

                       console.log(response.data)
                    }}></button> */}
                <Outlet/>
            </main>


            <footer></footer>
        </>
    )
}