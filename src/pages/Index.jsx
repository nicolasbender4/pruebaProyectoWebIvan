import { useLoaderData } from 'react-router-dom'


export function loader() {

    return 'desde loader';
}

const Index = () => {

    const data = useLoaderData()
    console.log(data);

    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">Inicio</h1>
            <p className="mt-3">Inicio</p>



        </>
    )
}

export default Index