declare namespace Repo {
  type DateTimestamp = string;

  interface HasItems {
    createdAt: DateTimestamp;
  }
}
