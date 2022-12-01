import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import InputError from '@/Components/InputError'
import PrimaryButton from '@/Components/PrimaryButton'
import { useForm, Head } from '@inertiajs/inertia-react'
import Post from '@/Components/Post'

const Index = ({ auth, posts }) => {
    const { data, setData, post, processing, reset, errors } = useForm({
        title:'',
        body: ''
    })

    const submit = (e) => {

        e.preventDefault()
        //console.log(data)
        post(route('posts.store'), {onSuccess: ()=> reset() })
    }

  return (
    <AuthenticatedLayout auth={auth}>

        <Head title='Posts'></Head>
        <div className='max-w-2xl p-4 mx-auto sm:p-6 lg:p-8'>
            <form onSubmit={submit}>
                <input value={data.title}
                        onChange={e => setData('title', e.target.value)}
                        type='text'
                        placeholder='Title'
                        autoFocus
                        className="block w-full mb-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />

                <InputError message={errors.title} className='mt-2'></InputError>

                <textarea
                    value={data.body}
                    onChange={e => setData('body', e.target.value)}
                    type='text'
                    placeholder='Body'
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    >

                </textarea>
                <InputError message={errors.title} className='mt-2'></InputError>
                <PrimaryButton className="mt-4 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                disabled = {processing}>
                    Crear
                </PrimaryButton>

            </form>
            <div className="mt-6 bg-indigo-400 divide-y-4 rounded-lg shadow-lg">
                {
                   posts.map( post =>
                    <Post key={post.id} post={post} /> )
                }
            </div>
        </div>

    </AuthenticatedLayout>
  )
}


export default Index

