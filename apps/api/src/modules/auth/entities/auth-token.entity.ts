import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AuthTokenDocument = AuthToken & Document;

@Schema()
export class AuthToken {
  @Prop({ unique: true })
  discordId: string;

  @Prop()
  refreshToken: string;
}

export const AuthTokenSchema = SchemaFactory.createForClass(AuthToken);
