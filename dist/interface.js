class FileStorage {
    constructor(location) {
        this.location = location;
    }
    save() {
        return true;
    }
    get() {
        return "anything";
    }
}
class DatabaseStorage {
    constructor(location) {
        this.location = location;
    }
    save() {
        return true;
    }
    get() {
        return "anything";
    }
}
const saveInformation = (info) => {
    info.save();
    return true;
};
// const db = new DatabaseStorage("http://localhost:127017/storage");
// saveInformation(db);
