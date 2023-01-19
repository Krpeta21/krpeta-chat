import { useSupabase } from "~/hooks/useSupabase"

export function Login(){
    const supabase = useSupabase()
    const handleLogout = async ()=>{
        const {error} = await supabase.auth.signOut()
        if(error)
        if(error) console.log('Eroror al cerrar', error)
    }
    const handleLogin = async () => {
        const {error} = await supabase.auth.signInWithOAuth({
            provider: 'github'
        })
        if(error) console.log('Eroror al iniciar sesion', error)
    }
    return(
        <div>
        <button onClick={handleLogout}>Cerrar sesion</button>
        <button onClick={handleLogin}>Iniciar sesion</button>
        </div>
    )
}