import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { TokenService } from 'src/services/token.service';


@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: TokenService) {}
  async use(req: any, res: any, next: (error?: any) => void) {
    const header = req.headers.authorization;

    if (!header) {
      res.status(401).send({ message: 'Header authorization is not' });
    }

    const token = header.split(' ')[1];

    try {
      const decoded = this.jwtService.verifyTokenAccess(token);

      if(decoded) {
        req.user = decoded;
        next();
      }
      else{
        // throw new UnauthorizedException('Token is invalid');
        // console.log('Token is invalid')
        throw new UnauthorizedException('Token is invalid');
      }
    } catch (error) {
      // console.log(error);
      throw new UnauthorizedException('Error verifying token: ', error);
    }
  }
}
