describe('Config Class', () => { 
    it("Should support static prop and method", ()=>{
        class Config{
            private static API_URL: string = 'http://localhost:3000';
            public static get ApiUrl(): string{
                return this.API_URL;
            }
            public static set newURL(v: string){
                v !== '' ? this.API_URL = v : ''
            }
        }
        // Config.API_URL = 'http://kuchi-store.com'
        Config.newURL = 'http://kuchi-store.com'
        console.log(Config.ApiUrl)
    })
 })