import React from "react";
import { useState, useEffect } from "react";

export default function MyHooks({ title, id }: { title: string; id?: string }) {
    // useEffect(()=>{
    //     console.log('Did')
    //     console.log('WillUpdate')
    // })

    // useEffect( () => {
    //     console.log("Did");
    //     return () => {
    //         console.log("WillUnmount");
    //     };
    // }, []);

    // useEffect(() => {
    //     console.log("compRecive", title);
    //     console.log("Will");
    // }, [title]);


    const [isMounted] = useInMounted();


    useEffect( ()=> {
        console.log('dada')
    }, [isMounted])
    return (
        <div>
            {title} {id}
        </div>
    );
}

function useInMounted() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect( () => {
        setIsMounted (true);
    }, []);

    return [isMounted]
}
