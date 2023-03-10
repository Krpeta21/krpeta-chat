import { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { supabase } from "~/utils/supabase.server";
import { Login } from "~/components/Login";

export const loader = async({}: LoaderArgs) =>{
const {data} = await supabase.from('messages').select()
return {messages: data ?? []}
}

export default function Index() {
  const {messages} = useLoaderData<typeof loader>()
  
  return(
    <main>
      <h1>Krpeta chat</h1>
      <Login/>
      <pre>
        {JSON.stringify(messages,null,2)}
      </pre>
    </main>
  )
}