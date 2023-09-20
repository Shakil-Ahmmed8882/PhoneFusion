import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Header></Header>
      <div className="min-h-screen">
        <div>
          {navigation.state === "loading" ? (
            <div className="flex justify-center items-center h-screen">
              <div>
                <span className="loading loading-spinner loading-lg"></span>
              </div>
            </div>
          ) : (
            <Outlet></Outlet>
          )}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
