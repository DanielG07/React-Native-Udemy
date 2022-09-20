export const TiposBasicos = () => {

    const nombre: string = 'Daniel';
    const edad: number = 35;
    const isActive: boolean = false;

    const poderes: string[] = ['Velocidad', 'Volar', 'Respirar en el agua'];

    return (
        <>
            <h3>TIpos Basicos</h3>
            { nombre }, { edad }, { (isActive) ? 'Activo' : 'No activo' }
            <br />
            { poderes.join(', ')}
        </>
    )
}