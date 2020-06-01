// src/repository/collections/user.d.ts

declare namespace Repo {
  interface User {
    username: string;
    email: string;
    passwordHash: string;
  }
}
