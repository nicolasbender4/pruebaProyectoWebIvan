import { Outlet, Link, useLocation } from 'react-router-dom'

const Layout = () => {
    const location = useLocation()

    return (
        <div className='md:flex flex-wrap md:min-h-screen'>
            <aside className='w-full bg-blue-600 px-5 py-5'>
                <h2 className='mt-5 text-5xl text-bold text-center text-white block'>Pedidos Web</h2>
                <nav className='mx-10 mt-5 flex justify-between'>
                    {/* <Link className={`${location.pathname === '/' ? 'text-blue-300' : 'text-white'} text-2xl block mt-2 hover:text-blue-300`} to='/'>Usuarios</Link> */}
                    <Link className={`${location.pathname === '/' ? 'text-blue-300' : 'text-white'} text-2xl  mt-2 text-center hover:text-blue-300`} to='/'>Incio</Link>
                    <Link className={`${location.pathname === '/pedidos' ? 'text-blue-300' : 'text-white'} text-2xl  mt-2 text-center hover:text-blue-300`} to='/pedidos'>Pedidos</Link>
                    <Link className={`${location.pathname === '/login' ? 'text-blue-300' : 'text-white'} text-2xl  mt-2 text-center hover:text-blue-300`} to='/login'>Login</Link>
                </nav>
            </aside>
            <main className='w-full p-10 md:h-screen overflow-scroll'>
                <Outlet />
            </main>
        </div >
    )
}

export default Layout