import { Outlet } from 'react-router-dom';
import Header from './Header';
import ProjectDiscription from './ProjectDiscription';

const Layout = () => {
    return (
        <>
            <Header />
            <ProjectDiscription/>
            
            <main className="App">
                <Outlet />
            </main>
        </>
    )
}

export default Layout