import type { Ewallet, Payment } from "../code/PaymentMethod"

describe('Payment Method', () => { 
    it("Should support type match with Payment Type", ()=> {
        const payment: Payment[] = [
            {
                kind : 'ewallet',
                app: 'gopay',
                balance: 50000
            },
            {
                kind : 'bank',
                bankName: 'BNI',
                accountNumber: '12345'
            },
            {
                kind : 'qris',
                merchant: 'matahari',
                amount: 100000
            },
            {
                kind : 'bank',
                bankName: 'BCA',
                accountNumber: '45678'
            },
            {
                kind : 'qris',
                merchant: 'Indomaret',
                amount: 20000
            }
        ]

        function isEwallet(p: Payment): p is Ewallet{
            return p.kind === 'ewallet'
        }
        function paymentInfo(p: Payment): string{
            switch(p.kind){
                case "ewallet":
                    return `Payment E-Wallet`
                case "bank":
                    return `Payment via Bank`
                case "qris":
                    return `Payment QRIS`
            }
        }
        const checkEwallet = (payment.filter(isEwallet))
        expect(checkEwallet.length).toBe(1)
        console.info('daftar E-Wallet: ', checkEwallet)
        const info:Payment = {
                kind : 'bank',
                bankName: 'BNI',
                accountNumber: '12345'
            }
        console.log('tipe Pembayaran: ', paymentInfo(info))
        expect(paymentInfo(info)).toBe('Payment via Bank')
    })
 })