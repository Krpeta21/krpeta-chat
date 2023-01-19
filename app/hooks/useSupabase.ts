import { useOutletContext } from "@remix-run/react"

export function useSupabase(){
    const {supabase} = useOutletContext()
    return supabase
}