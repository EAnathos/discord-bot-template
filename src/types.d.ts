import {
  Collection,
  CommandInteraction,
  Message,
  PermissionResolvable,
  SlashCommandBuilder,
  SlashCommandSubcommandBuilder,
} from "discord.js";

export interface BotEvent {
  name: string;
  once?: boolean | false;
  execute: (...args) => void;
}

export interface SlashCommand {
  name: string;
  data: SlashCommandBuilder | any;
  execute: (interaction: CommandInteraction) => Promise<void>;
}

export interface QuizQuestion {
  question: string;
  answer: string;
  image?: string;
  choiceA?: string;
  choiceB?: string;
  choiceC?: string;
  choiceD?: string;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CLIENT_ID: string;
      TOKEN: string;
    }
  }
}

declare module "discord.js" {
  export interface Client {
    slashCommands: Collection<string, SlashCommand>;
  }
}
