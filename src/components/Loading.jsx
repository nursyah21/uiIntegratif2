export default function Loading({visible=false,message="Loading..."}){
    return <>
        {visible ?
            <div className='flex h-screen w-screen justify-center items-center'>
                <h1 className='text-lg'>
                
                {message}
                </h1>
            </div> : null
        }
    </>
  }