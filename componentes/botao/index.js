export default function Botao ({
    tipo = 'button',
    texto,
    cor = 'primaria',
    desabilitado = false,
    manipularClique

}) {
    return (
        <button
        tipo = {'type'}
        className = {`btn ${cor}`}
        disabled = {desabilitado}
        onClick={manipularClique}
        >
            {texto}
        </button>

    );
}