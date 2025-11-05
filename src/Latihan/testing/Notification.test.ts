import type { EmailNotification, Notification, SMSNotification } from "../code/Notification"

describe('Notification', () => { 
    it("Should Match Type with Notification Type via Type Guard", ()=>{
        const message: Notification[] = [
            {
                kind: 'email',
                email: 'felienz@gmail.com',
                subject: 'test email'
            },
            {
                kind: 'sms', 
                phone: '+62-12345', 
                subject: 'test message'
            },
            { 
                kind: 'push', 
                deviceId: 'device-01', 
                title: 'test device notif' 
            }
        ]
        function isEmail(notif: Notification): notif is EmailNotification{
            // return !!(notif as EmailNotification).email
            return notif.kind === 'email'
        }

        const email = message.filter(isEmail)
        console.log('cek tipe pesan Email: ', email)
        //untuk tipe sms
        const sms = message.filter((e): e is SMSNotification => !!(e as SMSNotification).phone)
        console.log('cek tipe pesan SMS: ', sms)

        function handleNotif(n: Notification):string{
            switch(n.kind){
                case "email":
                    return `${n.email}: ${n.subject}`
                    case "sms":
                    return `${n.phone}: ${n.subject}`
                case "push":
                    return `${n.deviceId}: ${n.title}`
            }
        }
        const newEmail:EmailNotification = {
                kind: 'email',
                email: 'felienz@gmail.com',
                subject: 'test email'
            }
        console.info('notif email: ', handleNotif(newEmail))
    })
 })