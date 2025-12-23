import { Client, Account, Avatars } from "react-native-appwrite";

export const Client = new Client()
  .setProject("6939c14a003c45a4b6ef")
  .setPlatform("react_native_trial_sonia");
export const account = new Account(client);
export const avatars = new Avatars(client);
