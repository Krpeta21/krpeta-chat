import type { LinksFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";
import styles from './styles/global.css'
import { Database } from "./types/database";
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () =>[
  {rel: "stylesheet", href: styles},
]

export const loader = async ({}: LoaderArgs)=>{
  const env = {
    SUPABASE_URL: process.env.SUPABASE_URL!,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY!
  }
  return {env}
}

export default function App() {
  const {env} = useLoaderData<typeof loader>()
  const [supabase] = useState(()=> createClient<Database>(
    env.SUPABASE_URL,
    env.SUPABASE_ANON_KEY  
    ))
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet context={{ supabase }}/>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
