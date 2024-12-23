import { Injectable } from '@nestjs/common';
import { sign, verify } from 'jsonwebtoken';


@Injectable()
export class TokenService {
  //Потом брать из env
  private readonly secret = 'access';
  private readonly refresh = 'refresh';

   generateAccessToken(payload: any) {
    return  sign(payload, this.secret, { expiresIn: '30s' });
  }

   generateRefreshToken(payload: any) {
    return  sign(payload, this.refresh, { expiresIn: '1d' });
  }

   verifyTokenAccess(token: string) {
    try{
      const verifyTokenData =  verify(token, this.secret)
      if(verifyTokenData){
          return verifyTokenData
      }
    }
    catch(e){
      return false
    }
  }
  
   verifyTokenRefresh(token: string) {
    try{
      const verifyTokenData =  verify(token,this.refresh)
      if(verifyTokenData){
          return verifyTokenData
      }
    }
    catch(e){
      return false
    }
  }

}