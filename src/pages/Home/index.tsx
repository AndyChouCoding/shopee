import Product from "../components/product";

const ProductDate = [{name:'Iphone14',img:'',}]


const Home = () => {
    return<>
        <div>
            <section className="flex justify-center p-2 my-4">
                <input type="text" className="bg-gray-300 rounded-lg w-[400px] text-center" />
                <button className="w-[30px] h-[30px]  bg-black text-white mx-4"> ? </button>
            </section>
            <section className="flex justify-center p-2 bg-slate-400 h-[150px]"></section>
            <section className="flex justify-center p-2">
                <div className=" bg-gray-400 w-[50px] h-[50px] rounded-lg text-center p-2">1</div>
                <div className=" bg-gray-400 w-[50px] h-[50px] rounded-lg text-center p-2 mx-2">1</div>
                <div className=" bg-gray-400 w-[50px] h-[50px] rounded-lg text-center p-2 mx-2">1</div>
                <div className=" bg-gray-400 w-[50px] h-[50px] rounded-lg text-center p-2 mx-2">1</div>
                <div className=" bg-gray-400 w-[50px] h-[50px] rounded-lg text-center p-2">1</div>
            </section>
            <div className="flex justify-center p-2">section4</div>
            <div>
                <Product/>
            </div>
        </div>
    </>
} 
export default Home;