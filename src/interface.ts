interface IStorage {
  location: string;
  save(): boolean;
  get(): string;
}

class FileStorage implements IStorage {
  location: string;

  constructor(location: string) {
    this.location = location;
  }

  save(): boolean {
    return true;
  }
  get(): string {
    return "anything";
  }
}

class DatabaseStorage implements IStorage {
  location: string;

  constructor(location: string) {
    this.location = location;
  }

  save(): boolean {
    return true;
  }
  get(): string {
    return "anything";
  }
}

const saveInformation = (info: IStorage): boolean => {
  info.save();
  return true;
};

// const db = new DatabaseStorage("http://localhost:127017/storage");
// saveInformation(db);
