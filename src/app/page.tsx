"use client";
import { useRouter } from "next/navigation";
import './style.css';

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
  }
  return (
    <>
      <div className="flex justify-center flex-col items-center h-screen gap-4">
       <div className="flex justify-center flex-col items-center p-3.5 gap-4 bg-emerald-200 rounded-2xl" id="div__noPrincipal">
        <h1 className="font-bold text-3xl">¡Bienvenido a PlantPal!</h1>
        <div className="text-3xl bg-green-100 p-2 rounded-full">
            🌱
        </div>
        <p>Inicia Sesión para comenzar!</p>
        <form className="flex justify-center flex-col items-center gap-4  ">
          <label htmlFor="name">Nombre</label>
          <input type="text" name="name" placeholder="TuNombre" className="p-2 rounded-2xl bg-emerald-100" required></input>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="TuEmail" className="p-2 rounded-2xl bg-emerald-100" required></input>
          <button type="submit" className="p-2 rounded-2xl bg-emerald-100">Iniciar sesión</button>
        </form>
        <button onClick={handleClick} className="p-2 rounded-2xl bg-emerald-100">Ya tengo una cuenta</button>
      </div>
    </div>
    </>
  );  
}
