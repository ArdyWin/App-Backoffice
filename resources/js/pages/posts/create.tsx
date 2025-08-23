import InputError from '@/components/input-error';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';
import { Editor } from '@tinymce/tinymce-react';
import { useRef } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Post Create',
        href: '/posts',
    },
];

export default function PostCreate() {
    const { data, setData, errors, post } = useForm({
        title: '',
        body: '',
    });
    const editorRef = useRef<any>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('posts.store'));
    };
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Post Create" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div>
                    <Link
                        href={route('posts.index')}
                        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
                    >
                        Back
                    </Link>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-2">
                        <Label htmlFor="title">Title</Label>

                        <Input
                            id="title"
                            className="mt-1 block w-full"
                            defaultValue={data.title}
                            onChange={(e) => setData('title', e.target.value)}
                            required
                            autoComplete="title"
                            placeholder="title"
                        />

                        <InputError className="mt-2" message={errors.title} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="body">Body</Label>
                        <Editor
                            apiKey="76rk9klx2dtuf49aafdj7ae06s8nsibrhwffixlqmyybuboo"
                            onInit={(_evt, editor) => (editorRef.current = editor)}
                            onEditorChange={(newValue) => setData('body', newValue)}
                            init={{
                                height: 300,
                                menubar: false,
                                plugins: [
                                    'anchor',
                                    'autolink',
                                    'charmap',
                                    'codesample',
                                    'emoticons',
                                    'link',
                                    'lists',
                                    'media',
                                    'searchreplace',
                                    'table',
                                    'visualblocks',
                                    'wordcount',
                                    'image',
                                ],
                                toolbar:
                                    'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography uploadcare | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                            }}
                        />
                        <InputError className="mt-2" message={errors.body} />
                    </div>
                    <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                        Save
                    </button>
                </form>
            </div>
        </AppLayout>
    );
}
