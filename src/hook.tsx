import React from "react";
import { useState, useEffect } from "react";

export default function MyHooks({title, id}: {title: string, id?: string}) {
    // useEffect(()=>{
    //     console.log('Did')
    //     console.log('Will')
    // })

    useEffect(()=>{
        console.log('Did')
        return(
            console.log('WillUnmount')
        )
    }, [])

    // useEffect(()=>{
    //     console.log('compREcive', title)
    //     console.log('Will')
    // }, [title])

    return(
        <div>{title} {id}</div>
    )
}