export interface User {
  returnSecureToken?: boolean
  email: string,
  password: string
}

export interface Post {
  id?: string
  author: string
  content: string,
  title: string,
  date?: Date
}

export interface FbAuthResponse {
  idToken: string
  expiresIn: string
}

export interface FbCreateResponse {
  name: string
}
