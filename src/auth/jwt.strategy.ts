import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'your_secret_here', // Use environment variables in production
    });
  }

  async validate(payload: any) {
    // Payload contains the information encoded in the token (e.g., username)
    // Here, you could add more validation logic or database lookups if needed
    return { userId: payload.sub, username: payload.username };
  }
}
