
const toPromise = (value: boolean) => new Promise(resolve => setTimeout(() => resolve(value), 1500))

export class StartRepository {

  postUsername = async (username: string) => {
    localStorage.setItem('concentration_user', username)
    return toPromise(true)
  };
}