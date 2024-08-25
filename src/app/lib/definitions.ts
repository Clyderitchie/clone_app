export type Users = {
    id: string,       
    username: string, 
    email: string,    
    password: string, 
}


export type Posts = {
    id: Users['id'],
    context: String,
}