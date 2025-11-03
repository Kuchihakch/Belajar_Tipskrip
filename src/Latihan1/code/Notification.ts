export type EmailNotification = {
    kind: 'email', 
    email: string, 
    subject: string
}
export type SMSNotification = {
    kind: 'sms', 
    phone: string, 
    subject: string
}
export type PushNotification = { 
    kind: 'push', 
    deviceId: string, 
    title: string 
}

export type Notification = EmailNotification | SMSNotification | PushNotification