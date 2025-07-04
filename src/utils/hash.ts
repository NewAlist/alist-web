import sha256 from "sha256"

const hash_salt = "https://github.com/NewAlist/alist"

export function hashPwd(pwd: string) {
  return sha256(`${pwd}-${hash_salt}`)
}
