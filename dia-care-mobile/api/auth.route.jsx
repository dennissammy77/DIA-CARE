import axios
 from "axios";
import RouteHandler from "./routeHandler";
export default async function SignUpApi (payload){
    let base_url = await RouteHandler();
	const result = await axios.post(`${base_url}/api/auth/signup`,payload);
    if (result?.data?.error){
        throw new Error(result.data.message)
    }else{
        return result;
    }
}
export async function SignInApi (payload){
    let base_url = await RouteHandler();
    const result = await axios.post(`${base_url}/api/auth/signin`,payload);
    if (result?.data?.error){
        throw new Error(result.data.message)
    }else{
        return result;
    }
}