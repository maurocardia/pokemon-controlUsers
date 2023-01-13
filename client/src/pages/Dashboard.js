import "../styled-components/dashboard.css";
import { useEffect, useState } from "react";
import { getUserThunk } from "../store/slices/user.slice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import CardPokemon from "../components/CardPokemon";
import Button from "react-bootstrap/Button";
import PokemonDetail from "../components/PokemonDetail";

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [next, setNext] = useState(10);
  const [prev, setPrev] = useState(next - 10);
  const [show, setShow] = useState(false);
  const [pokemonDetail, setPokemonDetail] = useState([]);

  let indexPage = 0;

  const [poke, setPoke] = useState();
  const pages = [];

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?offset=${next - 10}&limit=10`)
      .then((res) => setPoke(res.data.results));
    dispatch(getUserThunk());
  }, [next]);

  const nextPage = () => {
    setNext(next + 10);
    setPrev(prev + 10);
  };

  const prevPage = () => {
    if (prev > 0) {
      setNext(next - 10);
      setPrev(prev - 10);
    }
  };

  for (let i = 1; i <= 10; i++) {
    pages.push(i);
  }

  const pagination = () => {
    if (next > 100 && next < 200) {
      indexPage = 10;
    } else if (next > 200 && next < 300) {
      indexPage = 20;
    } else if (next > 300 && next < 400) {
      indexPage = 30;
    }

    return pages.map((pag) => (
      <Button
        variant="outline-info"
        onClick={() => setNext((pag + indexPage) * 10)}
        className="selectorPage"
      >
        {pag + indexPage}
      </Button>
    ));
  };

  const setPokemon = (pok) => {
    setShow(true);
    console.log(pok);
    axios.get(pok.url).then((res) => setPokemonDetail(res.data));
  };

  return (
    <div className="containerApp">
      <PokemonDetail
        setShow={setShow}
        show={show}
        pokemonDetail={pokemonDetail}
      />
      <h1 className="titleApp">PokeDashBoard</h1>

      <div className="containerDash">
        {poke?.map((pok) => (
          <div className="containerDash2" onClick={() => setPokemon(pok)}>
            <CardPokemon url={pok.url} setShow={setShow} />
          </div>
        ))}
      </div>
      <div className="containerPagination">
        <Button variant="primary" className="prev" onClick={prevPage}>
          Prev
        </Button>{" "}
        {pagination()}
        <Button variant="primary" className="next" onClick={nextPage}>
          next
        </Button>{" "}
      </div>
    </div>
  );
};

export default Dashboard;
