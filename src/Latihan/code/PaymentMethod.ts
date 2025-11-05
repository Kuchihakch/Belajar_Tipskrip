export type Ewallet ={
    kind : 'ewallet',
    app: string,
    balance: number
}
export type BankTransfer ={
    kind : 'bank',
    bankName: string,
    accountNumber: string
}
export type QRIS ={
    kind : 'qris',
    merchant: string,
    amount: number
}
export type Payment = Ewallet | BankTransfer | QRIS