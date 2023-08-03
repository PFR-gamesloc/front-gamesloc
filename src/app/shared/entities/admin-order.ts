export interface AdminOrder {
    orderId: Number, 
    orderDate: Date, 
    orderReturn: Date, 
    price: Number, 
    customer: {
        customerId: Number,
        email: String
    }, 
    games: [{
        gameId: Number, 
        gameName: String,
    }]
}