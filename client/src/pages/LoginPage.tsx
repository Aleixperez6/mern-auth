import { loginRequest } from "../API/auth";


function LoginPage() {

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement> ) => {
        //forma para atajar sin estados de react
        e.preventDefault()
        const email = (e.currentTarget.elements[0] as HTMLInputElement).value
        const password = (e.currentTarget.elements[1] as HTMLInputElement).value

        const resLogin = await loginRequest(email,password)
        console.log(resLogin);
        
        
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="email" placeholder="email@mail.com" />
        <input type="password" placeholder="**********" />
        <button>
            Login
        </button>
    </form>
  )
}

export default LoginPage