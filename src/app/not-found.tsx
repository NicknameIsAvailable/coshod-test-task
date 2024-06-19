import React from 'react';
import Link from 'next/link';

import {Button} from '@/shared/ui/button';

const NotFound = () => {
    return (
        <section className="flex flex-col justify-center items-center gap-4 h-screen">
            <h1 className="text-5xl font-bold">Страница не найдена</h1>
            <Link href="/">
                <Button>На домашнюю страницу</Button>
            </Link>
        </section>
    );
};

export default NotFound;
