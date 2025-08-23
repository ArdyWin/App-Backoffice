import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm, usePage } from '@inertiajs/react';

type Post = {
    id: number;
    title: string;
};

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Post',
        href: '/posts',
    },
];

export default function Posts() {
    const { posts } = usePage<{ posts: Post[] }>().props;

    const { delete: destroy } = useForm();

    const handleDelete = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        if (confirm('Are you sure you want to delete this post?')) {
            destroy(route('posts.destroy', id));
        }
    };
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Posts" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div>
                    <Link
                        href={route('posts.create')}
                        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
                    >
                        create post
                    </Link>
                </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
                        <thead className="bg-gray-50 text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="py-3 pl-3">
                                    ID
                                </th>
                                <th scope="col" className="px-10 py-3">
                                    Title
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map(({ id, title }) => (
                                <tr
                                    key={id}
                                    className="border-b border-gray-200 bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
                                >
                                    <th scope="row" className="py-4 pl-3 font-medium whitespace-nowrap text-gray-900 dark:text-white">
                                        {id}
                                    </th>
                                    <td className="px-10 py-4">{title}</td>
                                    <td className="px-1 py-4 text-left">
                                        <form onSubmit={(e) => handleDelete(e, id)}>
                                            <Link
                                                href={route('posts.edit', id)}
                                                className="me-2 mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                type="submit"
                                                className="me-2 mb-2 rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 focus:outline-none dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                            >
                                                Delete
                                            </button>
                                        </form>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
