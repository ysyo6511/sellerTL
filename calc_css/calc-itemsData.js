// const naverStore={}
// const coupangStore={}
// const gmarketStore={}
// const auctionStore={}

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

const markets = [
    {
        marketId:uuidv4(),
        kStoreName: "전체",
        store: "allMarket",
        checkName:"checkAll"
    },
    {
        marketId:uuidv4(),
        kStoreName: "네이버스토어팜",
        store: "naver",
        checkName:"checkOne"

    },
    {
        marketId:uuidv4(),
        kStoreName: "쿠팡",
        store: "coupang",
        checkName:"checkOne"
    },
    {
        marketId:uuidv4(),
        kStoreName: "G마켓",
        store: "gmarket",
        checkName:"checkOne"
    },
    {
        marketId:uuidv4(),
        kStoreName: "옥션",
        store: "auction",
        checkName:"checkOne"
    },
]
const itemCategory = [
    {
        id: "category1",
        categoryName: "S20",
    },
    {
        id: "category2",
        categoryName: "s5",
    },
]

var items = [
    {
        id: uuidv4(),
        category: "category1",
        itemName: "s20",
        store: "naver",
        kStoreName: "네이버스토어팜",
        itemImg: "https://shopping-phinf.pstatic.net/main_8248047/82480471955.1.jpg",
        price: 135000,
        sellprice: 11,
        realSellTransUnitCharge: 22,
        sellTransUnitCharge: 333,
        purchaseCost: 110000,
        purchaseTransCharge: 10400,
        extraCharge: 0,
        marketFee: 0.13,
        profitMargin: 80000,
        numberOfSales: 1,
        adCost: 2400,
        saleCost: 3890,
        visible: false
    },
    {
        id: uuidv4(),
        category: "category1",
        itemName: "s20",
        store: "coupang",
        kStoreName: "쿠팡",
        itemImg: "https://shopping-phinf.pstatic.net/main_8248047/82480471955.1.jpg",
        price: 135000,
        sellprice: 22,
        realSellTransUnitCharge: 33,
        sellTransUnitCharge: 44,
        purchaseCost: 110000,
        purchaseTransCharge: 10400,
        extraCharge: 0,
        marketFee: 0.13,
        profitMargin: 90000,
        numberOfSales: 2,
        adCost: 2400,
        saleCost: 3890,
        visible: false
    },
    {
        id: uuidv4(),
        category: "category1",
        itemName: "s20",
        store: "gmarket",
        kStoreName: "G마켓",
        itemImg: "https://shopping-phinf.pstatic.net/main_8248047/82480471955.1.jpg",
        price: 135000,
        sellprice: 3345,
        realSellTransUnitCharge: 4345,
        sellTransUnitCharge: 5345,
        purchaseCost: 110000,
        purchaseTransCharge: 10400,
        extraCharge: 0,
        marketFee: 0.13,
        profitMargin: 100000,
        numberOfSales: 3,
        adCost: 2400,
        saleCost: 3890,
        visible: false
    },
    {
        id: uuidv4(),
        category: "category1",
        itemName: "s20",
        store: "auction",
        kStoreName: "옥션",
        itemImg: "https://shopping-phinf.pstatic.net/main_8248047/82480471955.1.jpg",
        price: 135000,
        sellprice: 3345,
        realSellTransUnitCharge: 4345,
        sellTransUnitCharge: 5345,
        purchaseCost: 110000,
        purchaseTransCharge: 10400,
        extraCharge: 0,
        marketFee: 0.13,
        profitMargin: 110000,
        numberOfSales: 4,
        adCost: 2400,
        saleCost: 3890,
        visible: false
    },
    {
        id: uuidv4(),
        category: "category2",
        itemName: "s30",
        store: "naver",
        kStoreName: "네이버스토어팜",
        itemImg: "https://shopping-phinf.pstatic.net/main_8248047/82480471955.1.jpg",
        price: 135000,
        sellprice: 3345,
        realSellTransUnitCharge: 4345,
        sellTransUnitCharge: 5345,
        purchaseCost: 110000,
        purchaseTransCharge: 10400,
        extraCharge: 0,
        marketFee: 0.13,
        profitMargin: 120000,
        numberOfSales: 5,
        adCost: 8900,
        saleCost: 100,
        visible: false
    },
    {
        id: uuidv4(),
        category: "category2",
        itemName: "s30",
        store: "coupang",
        kStoreName: "쿠팡",
        itemImg: "https://shopping-phinf.pstatic.net/main_8248047/82480471955.1.jpg",
        price: 135000,
        sellprice: 3345,
        realSellTransUnitCharge: 4345,
        sellTransUnitCharge: 5345,
        purchaseCost: 110000,
        purchaseTransCharge: 10400,
        extraCharge: 0,
        marketFee: 0.13,
        profitMargin: 130000,
        numberOfSales: 6,
        adCost: 8900,
        saleCost: 100,
        visible: false
    }
]
