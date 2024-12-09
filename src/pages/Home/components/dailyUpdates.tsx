
const Items = () =>{
    return<>
        <div className=" w-1/6">product</div>    
    </>
}

const DailyUpdate = () => {
    return<>
        <div>
            <h3>每日新發現</h3>
            <div className="flex flex-wrap ">
            {Array(16).fill(null).map((_, index) => (
              <Items key={index} />
            ))}
            </div>
        </div>
    </>
}
export default DailyUpdate;