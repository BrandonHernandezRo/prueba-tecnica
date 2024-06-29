import { useState } from "react";

interface CardPokemonProps {
    img: string;
    title: string;
    pokedexNumber: number;
    types: Array<any>;
    moves: Array<any>;
}


export const CardPokemonComp: React.FC<CardPokemonProps> = ({ img, title, pokedexNumber, types, moves }) => {
    const itemsPerPage = 10; // Número de elementos por página
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(moves.length / itemsPerPage);

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const getPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return moves.slice(startIndex, endIndex);
  };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="card col-6 col-md-6 col-lg-6" >
                    <div className="text-center">
                        <img src={img} className="card-img-top" alt={`img_${title}`} style={{ maxWidth: '200px' }} />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title text-center">{title}</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item" ><h6 className="text-start mb-2">Número pokédex:</h6>{pokedexNumber}</li>
                        <li className="list-group-item">
                            <h6 className="text-start mb-2">Tipo(s):</h6>
                            <ul  className="text-start m-3">
                                {types.map((type, index) => {
                                    return (
                                        <li key={index + 1}>{type.type.name}</li>
                                    )
                                })}
                            </ul>
                        </li>

                        <li className="list-group-item" >
                            <h6 className="text-start mb-2">Movimientos:</h6>
                            <ul className="text-start m-3">
                                {getPageItems().map((move, index) => (
                                    <li key={index} >{move.move.name}</li>
                                ))}
                            </ul>
                        </li>
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-center">
                                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                    <button className="page-link" onClick={handlePrevClick}>Anterior</button>
                                </li>
                                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                    <button className="page-link" onClick={handleNextClick}>Siguiente</button>
                                </li>
                            </ul>
                        </nav>
                    </ul>
                </div>
            </div>
        </div >

    )
}
