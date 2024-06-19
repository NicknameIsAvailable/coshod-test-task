import Link from 'next/link';

import {Card} from '@/shared/ui/card';
import {GoBack} from '@/widgets/root/header/ui/go-back';

export const Header = () => {
    return (
        <Card className="z-10 fixed w-screen bg-white backdrop-blur-md bg-opacity-70 shadow rounded-none border-none border-b-border">
            <header className="container py-4 mx-auto flex gap-4 items-center h-full">
                <GoBack />
                <Link href="/">
                    <h1 className="text-2xl font-bold">Восход</h1>
                </Link>
            </header>
        </Card>
    );
};
