export type Users = {
    id: String,
    username: String,
    email: String,
    password: String,
};

export type Posts = {
    id: Users['id'],
    context: String,
}