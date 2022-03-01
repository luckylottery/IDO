import Logo1 from "../../assets/image/Homepage/SVG/Asset 429.svg";
import styled from "styled-components";
const LogoWrapper = styled.div`
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content:center;
  width: 100%;
`;
const TextWrapper = styled.div`
  padding: 0px 600px;
  color: white;
  text-align: center;
`;
const ButtonGroup = styled.div`
  display:flex;
  flex-direction: row;
  justify-content:space-between;
  max-width: 650px;
width:100%;
`;
const LaunchButton = styled.button`

`;

const BuyCoinButtion = styled.button`
color: white;
border: 1.5px solid #229503;
padding: 5px 35px;
border-radius: 30px;
font-size: x-large;
background-color: black

`;
const PageLogo = () => {
	return (<>
		<div className="p-50 flex items-center justify-center w-full">
			{/* padding: 50px;
  display: flex;
  align-items: center;
  justify-content:center;
  width: 100%; */}
			<img src={Logo1} alt="logo" width="197px" height="280px" />
		</div>
		<div className="px-400 mb-100">
			<p className="text-white text-center">
				Lorem ipsum dolor sit amet, consecteture adipiscing elit, sed diam nonummy nibh euismod tinidunt ut
				laoreet dolore magna aliquam erat voutpat. Ut wisi enim ad minim veniam, quis nostrud exercitation ullam-
				corper suscipit lobortis nisl ut aliquip ex ea coomodo consequat.
				Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequate,Duis autem vel eum
				Lorem ipsum dolor sit amet, consecteture adipiscing elit, sed diam nonummy nibh euismod tinidunt ut
				laoreet dolore magna aliquam erat voutpat. Ut wisi enim ad minim veniam, quis nostrud exercitation ullam-
				corper suscipit lobortis nisl ut aliquip ex ea coomodo consequat.
				Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequate,Duis autem vel eum
				Lorem ipsum dolor sit amet, consecteture adipiscing elit, sed diam nonummy nibh euismod tinidunt ut
				laoreet dolore magna aliquam erat voutpat. Ut wisi enim ad minim veniam, quis nostrud exercitation ullam-
				corper suscipit lobortis nisl ut aliquip ex ea coomodo consequat.<br />
				Lo
        	</p>
		</div>
		<div className="flex flex-row justify-between max-w-3xl w-full">
			<button className="text-black font-bold bg-gradient-to-r from-green4 to-green2
			 px-50 py-12 rounded-full text-22">
				LAUNCH YOUR PROJECT WITH US
        </button >
			<button className="text-white border-2 border-green1 px-70 py-5 text-22  bg-transparent rounded-full">
				BUY $IGNT
        </button>
		</div>
	</>
	);
};

export default PageLogo;
