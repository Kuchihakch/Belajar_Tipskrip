describe('Payment Enum', () => { 
    it("Should support enumeration for payment method", ()=>{
        enum PaymentMethod{
            TRANSFER = 'TRANSFER',
            COD = 'COD',
            EWALLET = 'EWALLET'
        }

        function order(name: string, payment: PaymentMethod): string{
            return `Pembelian ${name}, pembayaran via ${payment}`
        }
        console.log(order('Aqua', PaymentMethod.COD))
        console.log(order('Nitro V15', PaymentMethod.TRANSFER))
    })
 })