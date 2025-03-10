import BannerSection from "./components/banner";
import ProductClassification from "./components/productClassification";
import DailyUpdate from "./components/dailyUpdates";


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