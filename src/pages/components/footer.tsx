



const Footer = () => {

    // payImage
    const pay = [
        {
            PayName:"MasterCard",
            payImg:"images/global/masterCard.png"
        },
        {
            PayName:"visaCard",
            payImg:"images/global/visaCard.png"
        },
        {
            PayName:"jcbCard",
            payImg:"images/global/jcbCard.png"
        }
    ]
    //shopImg
    const shop = [
        {
            shopName:"711Shop",
            shopImage:"images/global/711Shop.png"
        },
        {
            shopName:"familyShop",
            shopImage:"images/global/familyShop.png"
        },
        {
            shopName:"hilifeShop",
            shopImage:"images/global/hilifeShop.png"
        },
        {
            shopName:"okShop",
            shopImage:"images/global/okShop.png"
        }
    ]
    //environmentalFriendlyImage
    const environmentalFriendly = [
        {
            Environmentalfriendly:"Environmentalfriendly",
            EnvironmentalfriendlyImage:"images/global/Environmental friendly.png"
        }
    ]
    const socailImage = [
        {
            cocailName:"facebook",
            cocailImage:"images/global/icon/facebook.png"
        },
        {
            cocailName:"line",
            cocailImage:"images/global/icon/line.png"
        },
        {
            cocailName:"instagram",
            cocailImage:"images/global/icon/ins.png"
        }
    ]

    return<>
        <div className=" w-[1200px] mx-[auto] flex justify-between my-4 pt-2 border-t-[1px] border-gray-300">
            <div>
                <h3 className="my-2 font-bold">客服中心</h3>
                <ul className="text-[12px] text-gray-500">
                    <li><a href="">幫助中心</a></li>
                    <li><a href="">蝦皮商城</a></li>
                    <li><a href="">付款方式</a></li>
                    <li><a href="">蝦皮錢包</a></li>
                    <li><a href="">蝦幣</a></li>
                    <li><a href="">運費補助</a></li>
                    <li><a href="">退貨退款</a></li>
                    <li><a href="">延長訂單撥款</a></li>
                    <li><a href="">聯絡客服</a></li>
                    <li><a href="">防詐騙宣傳</a></li>
                </ul>
            </div>
            <div>
                <h3 className="my-2 font-bold">關於蝦皮</h3>
                <ul className="text-[12px] text-gray-500">
                    <li><a href="">關於蝦皮</a></li>
                    <li><a href="">加入我們</a></li>
                    <li><a href="">蝦皮條款</a></li>
                    <li><a href="">隱私權政策</a></li>
                    <li><a href="">蝦皮商城</a></li>
                    <li><a href="">賣家中心</a></li>
                    <li><a href="">限時特賣</a></li>
                    <li><a href="">聯絡媒體</a></li>
                </ul>
            </div>
            <div>
                <div>
                    <h3 className="my-2 font-bold">付款</h3>
                    <div className="flex">
                        <img className="" src={pay[0].payImg}/>
                        <img className="" src={pay[1].payImg} alt="" />
                        <img className="" src={pay[2].payImg} alt="" />
                    </div>
                </div>
                <div>
                    <h3 className="my-4 font-bold">物流合作</h3>
                    <div className="flex">
                        <img className="" src={shop[0].shopImage} alt="" />
                        <img className="" src={shop[1].shopImage} alt="" />
                        <img className="" src={shop[2].shopImage} alt="" />
                        <img className="" src={shop[3].shopImage} alt="" />
                    </div>
                </div>
                <div>
                    <h3 className="my-4 font-bold">蝦皮直送包裝減量標章</h3>
                    <div>
                        <img src={environmentalFriendly[0].EnvironmentalfriendlyImage} alt="" />
                    </div>
                </div>
            </div>
            <div>
                <h3 className="my-2 font-bold">關注我們</h3>
                <ul className="text-[12px] text-gray-500">
                    <li className="flex"><img className="pr-2" src={socailImage[0].cocailImage} alt="" /><a href="">{socailImage[0].cocailName}</a></li>
                    <li className="flex my-2"><img className="pr-2 " src={socailImage[1].cocailImage} alt="" /><a href="">{socailImage[1].cocailName}</a></li>
                    <li className="flex"><img className="pr-2" src={socailImage[2].cocailImage} alt="" /><a href="">{socailImage[2].cocailName}</a></li>
                </ul>
            </div>
            <div>
                <h3 className="my-2 font-bold">下載蝦皮</h3>
                <div className="flex">
                    <div>qrcode</div>
                    <div>link</div>
                </div>
            </div>
        </div>
    </>
}
export default Footer;