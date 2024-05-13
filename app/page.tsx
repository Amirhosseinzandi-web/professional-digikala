import FooterContainer from "@/components/FotterContainer/FooterContainer";
import HeaderContainer from "@/components/Header/HeaderContainer";
import MainContainer from "@/components/MainContainer/MainContainer";
import 'react-loading-skeleton/dist/skeleton.css'



const page = () => {
  return (
    <>
      <HeaderContainer />
      <MainContainer />
      <FooterContainer />
    </>
  );
}

export default page;