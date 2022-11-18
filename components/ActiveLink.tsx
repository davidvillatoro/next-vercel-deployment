import Link from "next/link"
import { useRouter } from "next/router"
import { CSSProperties, FC } from "react";

    const style: CSSProperties ={
            color: "#0070f3",
            textDecoration: "underline",
        }      

interface props{
  text: string,
  href: string
}

export const ActiveLink: FC<props> = ({text , href}) => {
    // asPath nos siver para ver en que ruta nos encotramos
    const {asPath} = useRouter();

  return (
    <Link href={href}>
        <label style={asPath === href ? style : undefined}>{text}</label>
    </Link>
  )
}


