import {
  ButtonSearchGroup,
  GrayButtonGroup,
  GrayButton,
  SearchGroup,
  SearchInput,
  IdoGroup

} from "./idoPool.styled";
import SearchIcon from "../../assets/image/Homepage/SVG/Asset 426.svg";
import ForwardIcon from "../../assets/image/Homepage/SVG/Asset 424.svg"
import { IdoItems, IdoCard } from "../../components/IdoCard";
const IdoPool = () => {
  return (
    <>
      <div>
        <ButtonSearchGroup>
          <GrayButtonGroup>
            <GrayButton> ALL POOLS </GrayButton>
            <GrayButton> UPCOMING </GrayButton>
            <GrayButton> ENDED </GrayButton>
          </GrayButtonGroup>
          <SearchGroup>
            <img src={SearchIcon} alt="logo" width="40px" height="40px" />
            <SearchInput>
            </SearchInput>
          </SearchGroup>
        </ButtonSearchGroup>
        <IdoGroup>
          {IdoItems.map(p => <IdoCard title={p.title} avatar={p.avatar} price={p.price}
            islive={p.islive}
            detail={p.detail}
            totalsize={p.totalsize}
            starts={p.starts}
            price1={p.price1} />)}
        </IdoGroup>
      </div>
      <div style={{ width: "100%" }}>
        <div className="h-200 mr-70 items-center mb-70" style={{ position: "relative", display: "flex", justifyContent: "right" }}>
          <button className="bg-green1 text-25 font-bold px-30 py-5 rounded-2xl h-fit">Ask Us</button>
          <img style={{ position: "absolute", bottom: 0, left: "50%" }} src={ForwardIcon} alt="ForwardIcon" width="44px" height="152px" />
        </div>

      </div>
    </>
  );
};

export default IdoPool;
