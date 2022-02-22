export interface UserData{
    id? : String
    username : String,
    phone : Number,
    email : String,
    country :String,
    state : String,
    countryCode : String,
    City : String

}
interface Skills{
    ratting : string,
    skillName : string
}

export interface LoginData {
    email : string,
    password : string
}

export interface TokenData{
    token : string
}