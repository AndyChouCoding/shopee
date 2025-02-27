import BannerSection from "./components/banner";
import Product from "../components/productList";
import ProductClassification from "./components/productClassification";
import DailyUpdate from "./components/dailyUpdates";

const ProductDate = [{name:'Iphone14',img:'',}]


const Home = () => {
    return<>
        <div>
            <div>
                <BannerSection />
            </div>
            <div>
                <ProductClassification/>
            </div>
            <div>
                <DailyUpdate/>
            </div>
        </div>
    </>
} 
export default Home;