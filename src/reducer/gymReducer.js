const initialData = {
    cart: [],
    items: [
        {
            itemName: "Pursue Fitness ADAPT Seamless Sports Bra Black",
            itemImage: "https://cdn.shopify.com/s/files/1/1510/6482/products/black-adapt-new-frontimage_750x.progressive.jpg?v=1593852802",
            itemPrice: "35000"
        },
        {
            itemName: "Pursue Fitness Offset Tank",
            itemImage: "https://cdn.shopify.com/s/files/1/1510/6482/products/OF-BLUE-E2_750x.progressive.jpg?v=1623382341",
            itemPrice: "25000"
        },
        {
            itemName: "Famme Long Techna High Waisted Leggings Black",
            itemImage: "https://cdn.shopify.com/s/files/1/1510/6482/products/long-techna-leggings-black_750x.png?v=1661830259",
            itemPrice: "35000"
        },
        {
            itemName: "Pursue Fitness Breeze Crop Tank Orange",
            itemImage: "https://cdn.shopify.com/s/files/1/1510/6482/products/breeze-crop-tank-coral_750x.png?v=1660879937",
            itemPrice: "35000"
        },
        {
            itemName: "Puruse Fitness Intensity Seamless T-Shirt Blue",
            itemImage: "https://cdn.shopify.com/s/files/1/1510/6482/products/MarchPursueFitness-2925_750x.png?v=1650511852",
            itemPrice: "15000"
        },
        {
            itemName: "Pursue Fitness Intensity Seamless 1/4 Zip Top Black",
            itemImage: "https://cdn.shopify.com/s/files/1/1510/6482/products/MarchPursueFitness-2869_750x.png?v=1650511842",
            itemPrice: "30000"
        },
        {
            itemName: "Pursue Fitness Blaze Seamless Sports Bra Pink",
            itemImage: "https://cdn.shopify.com/s/files/1/1510/6482/products/blaze-seamless-sports-bra-raspberry-ripple_750x.png?v=1651807901",
            itemPrice: "64000"
        },
        {
            itemName: "Pursue Fitness Bodybuilding T-Shirt White",
            itemImage: "https://cdn.shopify.com/s/files/1/1510/6482/products/White-Bodybuilding-TShirt-04_750x.progressive.jpg?v=1633248299",
            itemPrice: "30000"
        },
        {
            itemName: "Pursue Fitness Oversized Crop Hoodie Pink",
            itemImage: "https://cdn.shopify.com/s/files/1/1510/6482/products/NWS_0008s_0017_DSC00199_750x.progressive.jpg?v=1610744082",
            itemPrice: "45000"
        },
        {
            itemName: "Pursue Fitness Pro Fit Tapered Joggers Black/Grey",
            itemImage: "https://cdn.shopify.com/s/files/1/1510/6482/products/GH5_7787_1024x1024_3dc22edb-e9e8-49f9-bf51-6fa18229b406_750x.progressive.jpg?v=1593838283",
            itemPrice: "20000"
        },
        {
            itemName: "Pursue Fitness ADAPT Seamless Long Sleeve Crop Top Blackout",
            itemImage: "https://cdn.shopify.com/s/files/1/1510/6482/products/DSC08527_750x.progressive.jpg?v=1593853625",
            itemPrice: "45000"
        },
        {
            itemName: "Pursue Fitness All Season Jacket Grey",
            itemImage: "https://cdn.shopify.com/s/files/1/1510/6482/products/PURSUEFITNESS26062019LW_15_750x.progressive.jpg?v=1593851398",
            itemPrice: "45000"
        },
        {
            itemName: "Pursue Fitness Essential Breatheasy Stringer Vest White",
            itemImage: "https://cdn.shopify.com/s/files/1/1510/6482/products/GH5_4985_1024x1024_63daf533-92c5-442c-bfdd-c1a3d25747bb_750x.progressive.jpg?v=1593842408",
            itemPrice: "4000"
        },
        {
            itemName: "Pursue Fitness Icon Tapered Hoodie Dark Blue",
            itemImage: "https://cdn.shopify.com/s/files/1/1510/6482/products/GH5_2231_1024x1024_2f5a6c70-98a2-4ae0-a627-9a7edce17285_750x.progressive.jpg?v=1593840920",
            itemPrice: "30000"
        },
        {
            itemName: "Combat Dollies Chequered Skull Sports Bag",
            itemImage: "https://cdn.shopify.com/s/files/1/1510/6482/products/357134_f00934332ee24be1bff334ad81c1d980_mv2_750x.progressive.jpg?v=1643254214",
            itemPrice: "55000"
        },
        {
            itemName: "Pursue Fitness Essential Breatheasy T-Shirt Red",
            itemImage: "https://cdn.shopify.com/s/files/1/1510/6482/products/GH5_9092_1024x1024_da93deaa-e3a9-45e4-a192-d9f7124c4158_750x.progressive.jpg?v=1593847121",
            itemPrice: "20000"
        },
        {
            itemName: "Combat Dollies Plaid Sports Bag Beige",
            itemImage: "https://cdn.shopify.com/s/files/1/1510/6482/products/357134_f78d29fd3fc74ce2b34b40f5cb4b162d_mv2_750x.progressive.jpg?v=1667878315",
            itemPrice: "65000"

        },
        {
            itemName: "Pursue Fitness Essential Breatheasy Stringer Vest Red",
            itemImage: "https://cdn.shopify.com/s/files/1/1510/6482/products/GH5_8931_1024x1024_0a484517-8d14-4e45-bc0b-39754983594b_750x.progressive.jpg?v=1593847071",
            itemPrice: "20000"
        },
        {
            itemName: "Combat Dollies Rainbow Sports Bag",
            itemImage: "https://cdn.shopify.com/s/files/1/1510/6482/products/357134_3834e0c2e4994058b19a49d79138a11c_mv2_d_2928_2808_s_4_2_750x.progressive.jpg?v=1593851508",
            itemPrice: "55000"
        },
        {
            itemName: "Pursue Fitness Skipping Rope Black",
            itemImage: "https://cdn.shopify.com/s/files/1/1510/6482/products/untitled1_674a9e09-e8d4-4112-b1f7-2f1b59120998_750x.png?v=1593856253",
            itemPrice: "15000"
        },
        {
            itemName: "Pursue Fitness Breeze Crop Tank Purple",
            itemImage: "https://cdn.shopify.com/s/files/1/1510/6482/products/breeze-crop-tank-lilac_750x.png?v=1660879930",
            itemPrice: "35000"
        },

    ],

}

function gymReducer(state = initialData, action) {
    switch (action.type) {
        case "ADD_ITEM": return {
            ...state,
            cart: [...state.cart, action.payload],
            items: [...state.items, action.payload]
        }
        case "DELETE_ITEM" : return{
            ...state,
            cart: state.cart.filter((del)=>del !== action.payload)
        }
        default: {
            return state
        }
    }
}


export default gymReducer;