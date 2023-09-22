import * as user from '../user';

describe('test createNewUser',()=>{
    beforeEach(()=>{
        jest.clearAllMocks();
    });
    
    it('should send new token',async()=>{
        const req = {
            body: {
                name: 'test',
                password: 'test password'
            }
        }

        const res = {
            send({token}){ 
                expect(token).toBeTruthy();
            }
        }


        await user.createNewUser(req,res,()=>{});
    });
})