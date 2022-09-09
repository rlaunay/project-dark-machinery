import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DiscordTokenDocument = DiscordToken & Document;

@Schema()
export class DiscordToken {
  @Prop({ unique: true })
  discordId: string;

  @Prop()
  access_token: string;

  @Prop()
  token_type: string;
  
  @Prop()
  expires_in: number;
  
  @Prop()
  refresh_token: string;
  
  @Prop()
  scope: string;
}

export const DiscordTokenSchema = SchemaFactory.createForClass(DiscordToken);
