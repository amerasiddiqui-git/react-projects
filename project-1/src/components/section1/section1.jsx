import Nav from './nav.jsx'
import Page1Content from './Page1Content.jsx'
function Section1(props) {
    return (
        <div className=" h-screen w-full ">
          
            <Nav/>
             <Page1Content users={props.users} />
        </div>
    )
}

export default Section1
