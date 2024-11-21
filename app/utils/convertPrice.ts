export const convertPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(price)

    // return price.toLocaleString('en-US', {
    //     style: 'currency',
    //     currency: 'USD'
    // })
}