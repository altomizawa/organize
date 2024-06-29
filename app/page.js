import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className='w-screen h-screen flex justify-center items-center relative main__hero z-0'>
        <div className='flex flex-col items-end gap-2'>
          <h1 className='text-6xl font-bold text-white'>LET'S ORGANIZE IT!</h1>
          <button className='py-2 px-4 bg-blue-700 text-white font-bold uppercase'>ORGANIZE NOW</button> 
        </div>
        <div className='absolute w-full h-full bg-black top-0 left-0 opacity-60 -z-10'></div>
      </section>
      <section className='w-screen h-screen flex justify-center items-center bg-blue-400 gap-12 px-[10%]'>
        <h2 className='text-white font-bold uppercase text-3xl'>There's a better way to store.</h2>
        <p className='text-white max-w-[50%]'>Dolore aliquip id eu consectetur magna nostrud cupidatat sit amet nisi culpa. Voluptate officia mollit enim anim sint proident cillum consequat. Laboris velit culpa laborum ut Lorem nostrud ullamco ut esse Lorem. Aliquip qui mollit ea irure voluptate ullamco elit ullamco Lorem laboris nulla. Adipisicing sunt laborum aliqua esse fugiat officia. Deserunt incididunt proident ea reprehenderit laboris anim non cillum Lorem officia fugiat. Est aliquip Lorem non incididunt cupidatat officia dolore.</p>
      </section>
    </main>
  );
}
