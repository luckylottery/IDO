import styled from "styled-components";
import { FeaturedProjectCard, FeaturedProjects } from "../../components/FeaturedProjectCard";
export const TextFeature = styled.p`
font-size: 45px;
    color: #71EE4F;
    padding-top: 50px;
    margin-bottom:0px;
    font-weight: bold;
`;

export const SmallBox = styled.div`
display: flex;
align-items: center;
justify-content:center;
background:white;
width: 30px;
    height: 3px;
    border-radius: 2px;
`;
export const BoxRadiusGroup = styled.div`
  display:flex;
  flex-direction: row;
  justify-content:space-between;
  width:100%;
  max-width:1440px;
  margin-top:30px;
`;

const FeatureProjects = () => {
  return (<>
    <p className="text-45 text-green5 pt-50 font-bold">
      Featured Projects
      </p>
    <div className="flex items-center justify-center bg-white w-30 h-height1 rounded-sm mb-50"> </div>
    <div className="flex flex-row justify-between max-w-max">
      {FeaturedProjects.map(p => <FeaturedProjectCard title={p.title} avatar={p.avatar} testimonial={p.testimonial} />)}
    </div>
  </>
  );
};

export default FeatureProjects;