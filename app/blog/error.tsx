'use client'

export default function ErrorWraper({error}: {error: Error}) {
    <h1>error occured {error.message}</h1>
}